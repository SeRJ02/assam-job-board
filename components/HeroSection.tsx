'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './HeroSection.module.css'

const TRENDING = ['APSC', 'Police', 'Walk-in Interviews']

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('')
  const [email, setEmail] = useState('')
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(
      searchQuery.trim()
        ? `/all-jobs?search=${encodeURIComponent(searchQuery)}`
        : '/all-jobs'
    )
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
    <section className={styles.hero}>
      <div className={styles.container}>

        {/* Heading */}
        <div className={styles.content}>
          <h1 className={styles.title}>Assam's Most Trusted</h1>
          <h2 className={styles.subtitle}>
            <span className={styles.accentText}>Job Alert</span> Network
          </h2>
          <p className={styles.description}>
            Daily updates on government, private, and contract roles across Northeast India.
            Find your next opportunity today.
          </p>
        </div>

        {/* Search */}
        <form className={styles.searchForm} onSubmit={handleSearch}>
          <div className={styles.searchBar}>
            <span className={styles.searchIcon} aria-hidden="true">🔍</span>
            <input
              type="search"
              placeholder="Search for jobs, skills, or companies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
              aria-label="Search for jobs"
            />
            <button type="submit" className={styles.searchButton}>
              Find Jobs
            </button>
          </div>
        </form>

        {/* Trending */}
        <div className={styles.trending}>
          <span className={styles.trendingLabel}>Trending:</span>
          {TRENDING.map((tag) => (
            <button
              key={tag}
              type="button"
              className={styles.trendingPill}
              onClick={() => router.push(`/all-jobs?search=${encodeURIComponent(tag)}`)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Subscribe */}
        <form className={styles.subscribeForm} onSubmit={handleSubscribe}>
          {subscribeStatus === 'success' ? (
            <p className={styles.successMsg}>✅ You're subscribed! You'll receive daily job alerts.</p>
          ) : (
            <>
              <div className={styles.subscribeRow}>
                <input
                  type="email"
                  placeholder="Get daily alerts — enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.subscribeInput}
                  aria-label="Email address for job alerts"
                />
                <button
                  type="submit"
                  disabled={subscribeStatus === 'loading'}
                  className={styles.subscribeButton}
                >
                  {subscribeStatus === 'loading' ? '…' : 'Subscribe'}
                </button>
              </div>
              {subscribeStatus === 'error' && (
                <p className={styles.errorMsg}>Failed to subscribe. Please try again.</p>
              )}
            </>
          )}
        </form>

      </div>
    </section>
  )
}
