'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlForImageWithDimensions } from '@/lib/sanity'
import type { Job } from '@/lib/types'
import styles from './AllJobsClient.module.css'

const JOB_TYPE_OPTIONS = [
  { label: 'Government', value: 'govt' },
  { label: 'Private', value: 'private' },
  { label: 'Contract', value: 'contract' },
  { label: 'Walk-in', value: 'walkin' },
]

const CATEGORY_OPTIONS = [
  'Agriculture', 'Banking & Finance', 'Engineering', 'Government Jobs',
  'Health & Medical', 'Hospitality & Tourism', 'IT & Software',
  'Police & Defence', 'Railway Jobs', 'Teaching & Education',
]

function getBadgeClass(jobType: string): string {
  switch (jobType) {
    case 'govt':     return styles.badgeGovt
    case 'private':  return styles.badgePrivate
    case 'contract': return styles.badgeContract
    case 'walkin':   return styles.badgeWalkin
    default:         return styles.badgeDefault
  }
}

function getJobTypeLabel(jobType: string): string {
  switch (jobType) {
    case 'govt':     return 'Government'
    case 'private':  return 'Private'
    case 'contract': return 'Contract'
    case 'walkin':   return 'Walk-in'
    default:         return jobType
  }
}

export default function AllJobsClient({ jobs }: { jobs: Job[] }) {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [search, setSearch] = useState('')

  const toggleType = (value: string) =>
    setSelectedTypes((prev) =>
      prev.includes(value) ? prev.filter((t) => t !== value) : [...prev, value]
    )

  const toggleCategory = (value: string) =>
    setSelectedCategories((prev) =>
      prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]
    )

  const clearAll = () => {
    setSelectedTypes([])
    setSelectedCategories([])
    setSearch('')
  }

  const hasFilters = selectedTypes.length > 0 || selectedCategories.length > 0 || search

  const filtered = useMemo(() => {
    return jobs.filter((job) => {
      if (selectedTypes.length > 0 && !selectedTypes.includes(job.jobType)) return false
      if (selectedCategories.length > 0 && job.category && !selectedCategories.includes(job.category)) return false
      if (search) {
        const q = search.toLowerCase()
        if (
          !job.title.toLowerCase().includes(q) &&
          !job.company.toLowerCase().includes(q) &&
          !job.location.toLowerCase().includes(q)
        ) return false
      }
      return true
    })
  }, [jobs, selectedTypes, selectedCategories, search])

  return (
    <div className={styles.layout}>

      {/* Sidebar */}
      <aside className={styles.sidebar}>

        {/* Search */}
        <div className={styles.sidebarSection}>
          <h3 className={styles.sidebarTitle}>Search Jobs</h3>
          <input
            type="text"
            placeholder="Title, company, location…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={styles.searchInput}
            aria-label="Search jobs"
          />
        </div>

        {/* Job Type */}
        <div className={styles.sidebarSection}>
          <h3 className={styles.sidebarTitle}>Job Type</h3>
          <div className={styles.checkList}>
            {JOB_TYPE_OPTIONS.map(({ label, value }) => (
              <label key={value} className={styles.checkLabel}>
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(value)}
                  onChange={() => toggleType(value)}
                  className={styles.checkbox}
                />
                <span className={styles.checkText}>{label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Category */}
        <div className={styles.sidebarSection}>
          <h3 className={styles.sidebarTitle}>Category</h3>
          <div className={styles.checkList}>
            {CATEGORY_OPTIONS.map((cat) => (
              <label key={cat} className={styles.checkLabel}>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                  className={styles.checkbox}
                />
                <span className={styles.checkText}>{cat}</span>
              </label>
            ))}
          </div>
        </div>

        {hasFilters && (
          <button className={styles.clearBtn} onClick={clearAll}>
            Clear All Filters
          </button>
        )}
      </aside>

      {/* Main content */}
      <div className={styles.main}>
        <p className={styles.resultsCount}>
          Showing <strong>{filtered.length}</strong> of <strong>{jobs.length}</strong> jobs
        </p>

        {filtered.length > 0 ? (
          <div className={styles.jobList}>
            {filtered.map((job) => {
              const logoUrl = job.companyLogo
                ? urlForImageWithDimensions(job.companyLogo, 96, 96)
                : null

              return (
                <div key={job._id} className={styles.jobRow}>
                  {/* Logo column */}
                  <div className={styles.rowLogo}>
                    {logoUrl ? (
                      <Image
                        src={logoUrl}
                        alt={`${job.company} logo`}
                        width={48}
                        height={48}
                        className={styles.rowLogoImg}
                      />
                    ) : (
                      <div className={styles.rowLogoPlaceholder}>
                        {job.company.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </div>

                  {/* Info column */}
                  <div className={styles.rowInfo}>
                    <h3 className={styles.rowTitle}>{job.title}</h3>
                    <p className={styles.rowCompany}>{job.company}</p>
                    <p className={styles.rowLocation}>📍 {job.location}</p>
                    {job.salary && (
                      <p className={styles.rowSalary}>💰 {job.salary}</p>
                    )}
                  </div>

                  {/* Right column: badge + apply */}
                  <div className={styles.rowRight}>
                    <span className={`${styles.badge} ${getBadgeClass(job.jobType)}`}>
                      {getJobTypeLabel(job.jobType)}
                    </span>
                    <Link href={`/job/${job._id}`} className={styles.applyBtn}>
                      Apply Now
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className={styles.empty}>
            <p className={styles.emptyText}>No jobs match your filters.</p>
            <button className={styles.emptyClear} onClick={clearAll}>
              Clear filters
            </button>
          </div>
        )}
      </div>

    </div>
  )
}
