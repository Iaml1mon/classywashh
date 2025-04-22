'use client'

import Link from 'next/link'

const plans = [
  {
    id: 'basic-fresh',
    name: 'Basic Fresh',
    price: '$79/mo',
    description: '1 clean/month + 1 pressure wash (small area)',
  },
  {
    id: 'neat-elite',
    name: 'Neat Elite',
    price: '$129/mo',
    description: 'Bi-weekly cleaning + full driveway pressure wash',
  },
  {
    id: 'royal-shine',
    name: 'Royal Shine',
    price: '$199/mo',
    description: 'Weekly cleaning + 1 free add-on per month',
  },
]

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <main className="px-4 md:px-10 py-16 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center text-gray-900 mb-10 leading-tight">
          Elevate Your Space <br /> with <span className="text-blue-600">ClassyWash</span>
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex flex-col justify-between border border-gray-200 hover:border-blue-500"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h2>
                <p className="text-4xl font-extrabold text-blue-600 mb-4">{plan.price}</p>
                <p className="text-gray-600 text-sm mb-6 min-h-[60px]">{plan.description}</p>
              </div>
              <Link href={`/subscribe?plan=${encodeURIComponent(plan.id)}`} className="mt-4">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl font-semibold transition">
                  Choose Plan
                </button>
              </Link>
            </div>
          ))}
        </div>

        <section id="about" className="mt-24 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Why Choose ClassyWash?</h2>
          <p className="text-gray-600 text-lg">
          We&apos;re Sydney&apos;s premium cleaning club. Our plans make sure your home stays fresh, organized, and welcoming all month long.
            Join once, and never worry about mess again.
          </p>
        </section>
      </main>

      <footer className="bg-white border-t py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ClassyWash. All rights reserved.
      </footer>
    </div>
  )
}

