'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

export default function SubscribePage() {
  const searchParams = useSearchParams()
  const plan = searchParams.get('plan') || 'No Plan Selected'

  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    day: '',
    note: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const { name, phone, address, day, note } = formData
    const { error } = await supabase.from('subscriptions').insert([
      { name, phone, address, day, note, plan }
    ])
    if (!error) setSubmitted(true)
    else alert('Something went wrong!')
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center p-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">You’re in!</h1>
          <p className="text-lg">Thanks for subscribing to <strong>{plan}</strong>. We’ll contact you soon!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Subscribe to {plan}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Full Name" onChange={handleChange} className="w-full border p-2 rounded" required />
        <input name="phone" placeholder="Phone Number" onChange={handleChange} className="w-full border p-2 rounded" required />
        <input name="address" placeholder="Address" onChange={handleChange} className="w-full border p-2 rounded" required />
        <select name="day" onChange={handleChange} className="w-full border p-2 rounded" required>
          <option value="">Preferred Cleaning Day</option>
          <option value="Monday">Monday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Friday">Friday</option>
        </select>
        <textarea name="note" placeholder="Special Requests (optional)" onChange={handleChange} className="w-full border p-2 rounded" rows={3} />
        <button type="submit" className="w-full bg-black text-white p-2 rounded">Confirm Subscription</button>
      </form>
    </div>
  )
}
