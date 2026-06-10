'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/all-jobs?search=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <section className="bg-gradient-to-b from-green-800 to-green-700 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">
          Assam's Most Trusted
        </h1>
        <h2 className="text-5xl font-bold mb-6">
          <span className="text-yellow-400 italic">Job Alert</span> <span>Network</span>
        </h2>

        <p className="text-lg text-gray-100 mb-8">
          Daily updates on government, private, and contract roles across Northeast India. Find your next opportunity today.
        </p>

        <form onSubmit={handleSearch} className="mb-8">
          <div className="bg-white rounded-lg shadow-lg p-4 flex gap-2 max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search for jobs, skills, or companies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 outline-none text-gray-700 text-lg"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-green-800 font-bold px-8 py-2 rounded hover:bg-yellow-400 transition"
            >
              Find Jobs
            </button>
          </div>
        </form>

        <div className="flex gap-4 justify-center flex-wrap">
          <span className="text-sm font-semibold">Trending:</span>
          <button className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded text-sm transition">
            APSC
          </button>
          <button className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded text-sm transition">
            Police
          </button>
          <button className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded text-sm transition">
            Walk-in Interviews
          </button>
        </div>
      </div>
    </section>
  )
}
