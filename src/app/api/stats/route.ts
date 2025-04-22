import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { SUBSCRIPTION_PLANS } from "@/lib/constants"

export async function GET() {
  const supabase = createRouteHandlerClient({ cookies })

  // Get total revenue
  const { data: subscriptions, error: subError } = await supabase
    .from("subscriptions")
    .select("plan")
    .eq("status", "active")

  if (subError) {
    return NextResponse.json({ error: subError.message }, { status: 500 })
  }

  // Get total bookings
  const { count: totalBookings, error: bookingError } = await supabase
    .from("bookings")
    .select("*", { count: "exact", head: true })

  if (bookingError) {
    return NextResponse.json({ error: bookingError.message }, { status: 500 })
  }

  // Get average rating
  const { data: reviews, error: reviewError } = await supabase
    .from("reviews")
    .select("rating")

  if (reviewError) {
    return NextResponse.json({ error: reviewError.message }, { status: 500 })
  }

  const avgRating =
    reviews.length > 0
      ? reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
      : 0

  // Calculate monthly revenue from active subscriptions
  const monthlyRevenue = subscriptions.reduce((total, sub) => {
    const plan = SUBSCRIPTION_PLANS[sub.plan as keyof typeof SUBSCRIPTION_PLANS]
    return total + (plan?.price || 0)
  }, 0)

  return NextResponse.json({
    total_revenue: monthlyRevenue,
    active_subscriptions: subscriptions.length,
    total_bookings: totalBookings,
    avg_rating: avgRating,
  })
}
