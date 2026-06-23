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
      {/* SVG wave at bottom */}
      <div className={styles.wave} aria-hidden="true">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="rgba(255,255,255,0.08)"
          />
        </svg>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Assam&apos;s Most Trusted Job Alert Network
          </h1>
          <p className={styles.description}>
            Daily updates on government, private, and contract roles across Northeast India.
            Find your next opportunity today.
          </p>
        </div>

        {/* Search */}
        <form className={styles.searchForm} onSubmit={handleSearch}>
          <div className={styles.searchBar}>
            <input
              type="search"
              placeholder="Search for jobs, skills, or companies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
              aria-label="Search for jobs"
            />
            <button type="submit" className={styles.searchButton}>
              Search Jobs
            </button>
          </div>
        </form>

        {/* Trending */}
        <div className={styles.trending}>
          <span className={styles.trendingLabel}>TRENDING:</span>
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
            <p className={styles.successMsg}>You&apos;re subscribed! You&apos;ll receive daily job alerts.</p>
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
