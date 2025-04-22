import { CLEANING_DAYS, BOOKING_TIMES } from "@/lib/constants"

export type Role = "user" | "admin" | "cleaner"

export type CleaningDay = typeof CLEANING_DAYS[number]
export type BookingTime = typeof BOOKING_TIMES[number]

export interface User {
  id: string
  email: string
  name: string
  role: Role
  created_at: string
  phone?: string
  address?: string
}

export interface Subscription {
  id: string
  user_id: string
  plan: string
  status: "active" | "paused" | "cancelled"
  current_period_end: string
  created_at: string
  updated_at: string
  stripe_subscription_id: string
  stripe_customer_id: string
}

export interface Booking {
  id: string
  user_id: string
  subscription_id: string
  cleaner_id?: string
  date: string
  time: BookingTime
  status: "scheduled" | "in_progress" | "completed" | "cancelled"
  notes?: string
  created_at: string
  updated_at: string
}

export interface Review {
  id: string
  user_id: string
  booking_id: string
  cleaner_id: string
  rating: number
  comment: string
  created_at: string
}

export interface Notification {
  id: string
  user_id: string
  title: string
  message: string
  type: "info" | "success" | "warning" | "error"
  read: boolean
  created_at: string
}

export interface Stats {
  total_revenue: number
  active_subscriptions: number
  total_bookings: number
  avg_rating: number
}
