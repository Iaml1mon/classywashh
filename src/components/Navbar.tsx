'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-blue-600">
        ClassyWash
      </Link>
      <div className="space-x-4">
        <Link href="/" className="text-gray-700 hover:text-black">Home</Link>
        <Link href="/subscribe?plan=Basic Fresh" className="text-gray-700 hover:text-black">Subscribe</Link>
      </div>
    </nav>
  )
}

