'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

function SubscribeForm() {
  const searchParams = useSearchParams()
  const plan = searchParams.get('plan') || 'No Plan Selected'

  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    day: '',
    note: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError(null) // Clear any previous errors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const { name, phone, address, day, note } = formData
      console.log('Submitting data:', { name, phone, address, day, note, plan })
      
      const { data, error } = await supabase
        .from('subscriptions')
        .insert([{ name, phone, address, day, note, plan }])
        .select()

      if (error) {
        console.error('Supabase error:', error)
        setError(error.message)
        return
      }

      console.log('Subscription successful:', data)
      setSubmitted(true)
    } catch (err) {
      console.error('Submission error:', err)
      setError('An unexpected error occurred. Please try again.')
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center p-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">You're in!</h1>
          <p className="text-lg">Thanks for subscribing to <strong>{plan}</strong>. We'll contact you soon!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Subscribe to {plan}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
            {error}
          </div>
        )}
        <input 
          name="name" 
          placeholder="Full Name" 
          onChange={handleChange} 
          value={formData.name}
          className="w-full border p-2 rounded" 
          required 
        />
        <input 
          name="phone" 
          placeholder="Phone Number" 
          onChange={handleChange} 
          value={formData.phone}
          className="w-full border p-2 rounded" 
          required 
        />
        <input 
          name="address" 
          placeholder="Address" 
          onChange={handleChange} 
          value={formData.address}
          className="w-full border p-2 rounded" 
          required 
        />
        <select 
          name="day" 
          onChange={handleChange} 
          value={formData.day}
          className="w-full border p-2 rounded" 
          required
        >
          <option value="">Preferred Cleaning Day</option>
          <option value="Monday">Monday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Friday">Friday</option>
        </select>
        <textarea 
          name="note" 
          placeholder="Special Requests (optional)" 
          onChange={handleChange} 
          value={formData.note}
          className="w-full border p-2 rounded" 
          rows={3} 
        />
        <button type="submit" className="w-full bg-black text-white p-2 rounded hover:bg-gray-800 transition-colors">
          Confirm Subscription
        </button>
      </form>
    </div>
  )
}

export default function SubscribePage() {
  return (
    <SubscribeForm />
  )
}
