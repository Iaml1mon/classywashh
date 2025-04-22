import { headers } from "next/headers"
import { NextResponse } from "next/server"
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
})

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(req: Request) {
  const body = await req.text()
  const signature = headers().get("Stripe-Signature") as string

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (error: any) {
    return NextResponse.json(
      { error: `Webhook Error: ${error?.message || "Unknown error"}` },
      { status: 400 }
    )
  }

  const supabase = createRouteHandlerClient({ cookies })

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session

        // Update subscription status in database
        const { error } = await supabase
          .from("subscriptions")
          .update({
            status: "active",
            stripe_subscription_id: session.subscription as string,
            stripe_customer_id: session.customer as string,
          })
          .eq("id", session.client_reference_id)

        if (error) {
          console.error("Error updating subscription:", error)
          return NextResponse.json(
            { error: `Error updating subscription: ${error?.message || "Unknown error"}` },
            { status: 500 }
          )
        }

        break
      }

      case "customer.subscription.updated":
      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription

        const status =
          event.type === "customer.subscription.deleted"
            ? "cancelled"
            : subscription.status === "active"
            ? "active"
            : "paused"

        // Update subscription status in database
        const { error } = await supabase
          .from("subscriptions")
          .update({
            status,
            current_period_end: new Date(
              subscription.current_period_end * 1000
            ).toISOString(),
          })
          .eq("stripe_subscription_id", subscription.id)

        if (error) {
          console.error("Error updating subscription:", error)
          return NextResponse.json(
            { error: `Error updating subscription: ${error?.message || "Unknown error"}` },
            { status: 500 }
          )
        }

        break
      }
    }

    return NextResponse.json({ received: true })
  } catch (error: any) {
    return NextResponse.json(
      { error: `Webhook Error: ${error?.message || "Unknown error"}` },
      { status: 400 }
    )
  }
}
