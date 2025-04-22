import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { type NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get("code")

  if (code) {
    const supabase = createRouteHandlerClient({ cookies })
    await supabase.auth.exchangeCodeForSession(code)
  }

  return NextResponse.redirect(requestUrl.origin)
}

export async function POST(request: NextRequest) {
  const { action, ...data } = await request.json()
  const supabase = createRouteHandlerClient({ cookies })

  if (action === "signIn") {
    const { error } = await supabase.auth.signInWithPassword(data)
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }
  }

  if (action === "signUp") {
    const { error } = await supabase.auth.signUp(data)
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }
  }

  if (action === "signOut") {
    const { error } = await supabase.auth.signOut()
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }
  }

  return NextResponse.json({ success: true })
}
