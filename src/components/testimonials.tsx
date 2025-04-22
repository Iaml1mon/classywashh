"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    content:
      "ClassyWash has transformed my home! The team is professional, thorough, and always on time. My space has never looked better.",
    author: {
      name: "Sarah Johnson",
      role: "Homeowner",
    },
    rating: 5,
  },
  {
    content:
      "As a busy professional, I don't have time to clean. ClassyWash has been a lifesaver. Their attention to detail is unmatched.",
    author: {
      name: "Michael Chen",
      role: "Business Owner",
    },
    rating: 5,
  },
  {
    content:
      "The best cleaning service I've ever used. They go above and beyond every time. Worth every penny!",
    author: {
      name: "Emma Wilson",
      role: "Real Estate Agent",
    },
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Don't just take our word for it. Here's what our customers have to say
            about their experience with ClassyWash.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl bg-gray-50 p-6 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
            >
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 blur transition duration-1000 group-hover:opacity-20" />
              <div className="relative">
                <div className="flex items-center gap-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="mt-6">
                  <p className="text-base text-gray-600 dark:text-gray-300">
                    {testimonial.content}
                  </p>
                </blockquote>
                <div className="mt-6 flex items-center">
                  <div className="h-10 w-10 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
                  <div className="ml-4">
                    <div className="text-base font-medium text-gray-900 dark:text-white">
                      {testimonial.author.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.author.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 