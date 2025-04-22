"use client"

import { motion } from "framer-motion"
import { 
  Shield, 
  Clock, 
  Sparkles, 
  Users, 
  Calendar, 
  Star 
} from "lucide-react"

const features = [
  {
    name: "Premium Quality",
    description: "Our trained professionals use top-tier equipment and eco-friendly products.",
    icon: Sparkles,
  },
  {
    name: "Flexible Scheduling",
    description: "Choose cleaning times that work best for your schedule.",
    icon: Calendar,
  },
  {
    name: "Trusted Professionals",
    description: "All our cleaners are background-checked and extensively trained.",
    icon: Shield,
  },
  {
    name: "Quick Service",
    description: "Fast and efficient cleaning without compromising on quality.",
    icon: Clock,
  },
  {
    name: "Customer Support",
    description: "24/7 support to address any concerns or special requests.",
    icon: Users,
  },
  {
    name: "Satisfaction Guaranteed",
    description: "We're not happy until you're completely satisfied.",
    icon: Star,
  },
]

export function Features() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Why Choose ClassyWash?
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Experience the difference with our premium cleaning service
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
            >
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 blur transition duration-1000 group-hover:opacity-20" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 