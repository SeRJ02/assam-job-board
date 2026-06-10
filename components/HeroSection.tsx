'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('')
  const [email, setEmail] = useState('')
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/all-jobs?search=${encodeURIComponent(searchQuery)}`)
    } else {
      router.push('/all-jobs')
    }
  }

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubscribeStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setSubscribeStatus('success')
        setEmail('')
      } else {
        setSubscribeStatus('error')
      }
    } catch {
      setSubscribeStatus('error')
    }
  }

  return (
    <section className="bg-green-800 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-3 leading-tight">
          Assam's Most Trusted
        </h1>
        <h2 className="text-5xl font-bold mb-6 leading-tight">
          <span className="text-yellow-400 italic font-serif">Job Alert</span>{' '}
          <span>Network</span>
        </h2>

        <p className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto">
          Daily updates on government, private, and contract roles across Northeast India. Find your next opportunity today.
        </p>

        {/* Search */}
        <form onSubmit={handleSearch} className="mb-6">
          <div className="bg-white rounded-lg shadow-lg flex gap-0 max-w-2xl mx-auto overflow-hidden">
            <span className="pl-4 flex items-center text-gray-400">🔍</span>
            <input
              type="text"
              placeholder="Search for jobs, skills, or companies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-3 py-4 outline-none text-gray-700 text-base"
            />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-400 text-green-900 font-bold px-8 py-4 transition"
            >
              Find Jobs
            </button>
          </div>
        </form>

        {/* Trending */}
        <div className="flex gap-3 justify-center flex-wrap items-center mb-10">
          <span className="text-sm text-gray-300">Trending:</span>
          {['APSC', 'Police', 'Walk-in Interviews'].map((tag) => (
            <button
              key={tag}
              onClick={() => router.push(`/all-jobs?search=${encodeURIComponent(tag)}`)}
              className="bg-green-700 hover:bg-green-600 border border-green-600 px-4 py-1.5 rounded-full text-sm transition"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Quick Subscribe */}
        <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
          {subscribeStatus === 'success' ? (
            <p className="text-yellow-400 font-semibold">✅ You're subscribed! You'll receive daily job alerts.</p>
          ) : (
            <>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Get daily alerts — enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded text-gray-900 outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                />
                <button
                  type="submit"
                  disabled={subscribeStatus === 'loading'}
                  className="bg-yellow-500 hover:bg-yellow-400 disabled:opacity-60 text-green-900 font-bold px-5 py-2.5 rounded transition text-sm"
                >
                  {subscribeStatus === 'loading' ? '...' : 'Subscribe'}
                </button>
              </div>
              {subscribeStatus === 'error' && (
                <p className="text-red-300 text-xs mt-2">Failed to subscribe. Please try again.</p>
              )}
            </>
          )}
        </form>
      </div>
    </section>
  )
}
