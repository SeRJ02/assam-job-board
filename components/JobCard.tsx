'use client'

import Link from 'next/link'
import Image from 'next/image'
import { urlForImageWithDimensions } from '@/lib/sanity'
import type { SanityImage } from '@/lib/types'
import styles from './JobCard.module.css'

interface JobCardProps {
  id: string
  title: string
  company: string
  location: string
  jobType: string
  salary?: string
  postedDate: string
  description?: string
  companyLogo?: SanityImage
  jobBanner?: SanityImage
}

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

export default function JobCard({
  id,
  title,
  company,
  location,
  jobType,
  salary,
  postedDate,
  description,
  companyLogo,
}: JobCardProps) {
  const logoUrl = companyLogo ? urlForImageWithDimensions(companyLogo, 96, 96) : null

  return (
    <div className={styles.card}>
      {/* Top row: logo + badge */}
      <div className={styles.header}>
        <div className={styles.logoWrapper}>
          {logoUrl ? (
            <Image
              src={logoUrl}
              alt={`${company} logo`}
              width={40}
              height={40}
              className={styles.logoImg}
            />
          ) : (
            <div className={styles.logoPlaceholder}>
              {company.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        <span className={`${styles.badge} ${getBadgeClass(jobType)}`}>
          {getJobTypeLabel(jobType)}
        </span>
      </div>

      {/* Title + company */}
      <div className={styles.titleGroup}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.company}>{company}</p>
      </div>

      {/* Meta: location + salary */}
      <div className={styles.meta}>
        <span className={styles.metaItem}>📍 {location}</span>
        {salary && (
          <span className={`${styles.metaItem} ${styles.salary}`}>💰 {salary}</span>
        )}
      </div>

      {/* Description */}
      {description && (
        <p className={styles.description}>{description}</p>
      )}

      {/* Actions */}
      <div className={styles.actions}>
        <Link href={`/job/${id}`} className={styles.btnPrimary}>
          View Details
        </Link>
        <button type="button" className={styles.btnSecondary}>
          Save Job
        </button>
      </div>

      {/* Posted date */}
      <p className={styles.date}>
        POSTED{' '}
        {new Date(postedDate).toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        }).toUpperCase()}
      </p>
    </div>
  )
}
