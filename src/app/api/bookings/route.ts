import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { type NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const userId = searchParams.get("userId")
  const status = searchParams.get("status")

  const supabase = createRouteHandlerClient({ cookies })

  let query = supabase
    .from("bookings")
    .select(
      `
      *,
      cleaners:cleaner_id (
        id,
        name,
        email
      )
    `
    )
    .order("date", { ascending: false })

  if (userId) {
    query = query.eq("user_id", userId)
  }

  if (status) {
    query = query.eq("status", status)
  }

  const { data, error } = await query

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}

export async function POST(request: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies })
  const data = await request.json()

  const { data: booking, error } = await supabase
    .from("bookings")
    .insert([data])
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(booking)
}

export async function PUT(request: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies })
  const { id, ...data } = await request.json()

  const { data: booking, error } = await supabase
    .from("bookings")
    .update(data)
    .eq("id", id)
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(booking)
}

export async function DELETE(request: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies })
  const { id } = await request.json()

  const { error } = await supabase.from("bookings").delete().eq("id", id)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
