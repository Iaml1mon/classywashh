import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { format, parseISO } from "date-fns"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date) {
  if (typeof date === "string") {
    return format(parseISO(date), "MMMM d, yyyy")
  }
  return format(date, "MMMM d, yyyy")
}

export function formatDateTime(date: string | Date) {
  if (typeof date === "string") {
    return format(parseISO(date), "MMMM d, yyyy 'at' h:mm a")
  }
  return format(date, "MMMM d, yyyy 'at' h:mm a")
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount)
}

export function generateTimeSlots(date: Date, existingBookings: string[] = []) {
  const startHour = 9 // 9 AM
  const endHour = 17 // 5 PM
  const slots = []

  for (let hour = startHour; hour < endHour; hour++) {
    const time = new Date(date)
    time.setHours(hour, 0, 0, 0)
    
    // Check if this time slot is already booked
    const timeString = format(time, "HH:mm")
    const isBooked = existingBookings.includes(timeString)
    
    slots.push({
      time: timeString,
      available: !isBooked,
    })
  }

  return slots
}

export function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
}

export function truncate(str: string, length: number) {
  return str.length > length ? `${str.substring(0, length)}...` : str
}

export async function fetcher<T = any>(
  url: string,
  init?: RequestInit
): Promise<T> {
  const res = await fetch(url, init)
  
  if (!res.ok) {
    const json = await res.json()
    throw new Error(json.message || "An error occurred while fetching the data.")
  }
  
  return res.json()
}

export function isValidEmail(email: string) {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  return emailRegex.test(email)
}

export function getErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return error.message
  }
  return String(error)
}