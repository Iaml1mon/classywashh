'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Testimonials } from "@/components/testimonials"

const plans = [
  {
    id: "basic-fresh",
    name: "Basic Fresh",
    price: "$79/mo",
    description: "1 clean/month + 1 pressure wash (small area)",
    features: ["Monthly deep clean", "Small area pressure wash", "Priority scheduling"],
  },
  {
    id: "neat-elite",
    name: "Neat Elite",
    price: "$129/mo",
    description: "Bi-weekly cleaning + full driveway pressure wash",
    features: [
      "Bi-weekly deep clean",
      "Full driveway pressure wash",
      "Priority scheduling",
      "Free add-on service",
    ],
  },
  {
    id: "royal-shine",
    name: "Royal Shine",
    price: "$199/mo",
    description: "Weekly cleaning + 1 free add-on per month",
    features: [
      "Weekly deep clean",
      "Full property pressure wash",
      "Priority scheduling",
      "2 free add-on services",
      "VIP customer support",
    ],
  },
]

export default function Page() {
  return (
    <div className="pt-16">
      <Hero />
      
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg ring-1 ring-gray-200 dark:ring-gray-700 hover:shadow-xl transition-shadow"
              >
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 blur transition duration-1000 group-hover:opacity-20" />
                <div className="relative flex flex-col h-full">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900 dark:text-white">
                    {plan.name}
                  </h3>
                  <p className="mt-4 text-3xl font-bold tracking-tight text-blue-600">
                    {plan.price}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
                    {plan.description}
                  </p>
                  <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <svg
                          className="h-6 w-5 flex-none text-blue-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-8">
                    <Button asChild className="w-full">
                      <Link href={`/subscribe?plan=${plan.id}`}>Choose Plan</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Features />
      <Testimonials />
    </div>
  )
}

