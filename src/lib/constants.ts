export const siteConfig = {
  name: "ClassyWash",
  description: "Premium Home Cleaning & Care Services",
  url: "https://classywash.com",
  ogImage: "https://classywash.com/og.jpg",
  links: {
    twitter: "https://twitter.com/classywash",
    github: "https://github.com/classywash",
  },
}

export const SUBSCRIPTION_PLANS = {
  BASIC: {
    name: "Basic Clean",
    price: 129,
    description: "Perfect for small homes",
    features: [
      "2-hour cleaning session",
      "Basic cleaning supplies included",
      "Weekly or bi-weekly options",
      "100% satisfaction guarantee",
    ],
  },
  PREMIUM: {
    name: "Premium Care",
    price: 199,
    description: "Ideal for regular maintenance",
    features: [
      "3-hour deep cleaning session",
      "Premium eco-friendly supplies",
      "Weekly scheduling priority",
      "Same cleaner guarantee",
      "Pet-friendly options",
    ],
  },
  ULTIMATE: {
    name: "Ultimate Package",
    price: 299,
    description: "Complete home care solution",
    features: [
      "4-hour comprehensive service",
      "Premium supplies & equipment",
      "Priority scheduling",
      "Dedicated care team",
      "Special treatments included",
      "24/7 customer support",
    ],
  },
}

export const CLEANING_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const

export const BOOKING_TIMES = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
] as const
