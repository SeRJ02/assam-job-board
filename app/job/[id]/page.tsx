import { getJobById, urlForImage, urlForImageWithDimensions } from '@/lib/sanity'
import { getJobTypeLabel, formatDate } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import styles from './JobDetail.module.css'

export const dynamic = 'force-dynamic'

function getJobTypeBadgeStyle(jobType: string): { bg: string; color: string; label: string } {
  switch (jobType) {
    case 'govt':     return { bg: '#E8F5E9', color: '#1B7F4A', label: 'Government' }
    case 'private':  return { bg: '#E3F2FD', color: '#1565C0', label: 'Private' }
    case 'contract': return { bg: '#FFF3E0', color: '#E65100', label: 'Contract' }
    case 'walkin':   return { bg: '#F3E5F5', color: '#6A1B9A', label: 'Walk-in' }
    default:         return { bg: '#F5F5F5', color: '#666666', label: jobType }
  }
}

export default async function JobDetailPage({ params }: { params: { id: string } }) {
  const job = await getJobById(params.id).catch(() => null)
  if (!job) return notFound()

  const bannerUrl = job.jobBanner ? urlForImage(job.jobBanner) : null
  const logoUrl = job.companyLogo ? urlForImageWithDimensions(job.companyLogo, 96, 96) : null
  const badge = getJobTypeBadgeStyle(job.jobType)

  return (
    <div className={styles.page}>
      <div className={styles.container}>

        {/* Breadcrumb */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/" className={styles.breadcrumbLink}>Home</Link>
          <span className={styles.breadcrumbSep}>/</span>
          <Link href="/all-jobs" className={styles.breadcrumbLink}>All Jobs</Link>
          <span className={styles.breadcrumbSep}>/</span>
          <span className={styles.breadcrumbCurrent}>{job.title}</span>
        </nav>

        <div className={styles.layout}>
          {/* Main Content */}
          <main className={styles.main}>
            {/* Banner */}
            {bannerUrl && (
              <div className={styles.bannerWrapper}>
                <Image
                  src={bannerUrl}
                  alt={`${job.title} banner`}
                  fill
                  className={styles.bannerImg}
                  priority
                />
              </div>
            )}

            <div className={styles.card}>
              {/* Header */}
              <div className={styles.cardHeader}>
                <div className={styles.companyRow}>
                  {logoUrl ? (
                    <div className={styles.logoBox}>
                      <Image
                        src={logoUrl}
                        alt={`${job.company} logo`}
                        width={64}
                        height={64}
                        className={styles.logoImg}
                      />
                    </div>
                  ) : (
                    <div className={styles.logoPlaceholder}>
                      {job.company.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div>
                    <h1 className={styles.jobTitle}>{job.title}</h1>
                    <p className={styles.companyName}>{job.company}</p>
                  </div>
                </div>
                <span
                  className={styles.badge}
                  style={{ background: badge.bg, color: badge.color }}
                >
                  {badge.label}
                </span>
              </div>

              {/* Quick Info Boxes */}
              <div className={styles.infoBoxes}>
                <div className={styles.infoBox}>
                  <span className={styles.infoIcon}>📍</span>
                  <div>
                    <div className={styles.infoLabel}>Location</div>
                    <div className={styles.infoValue}>{job.location}</div>
                  </div>
                </div>
                {job.salary && (
                  <div className={styles.infoBox}>
                    <span className={styles.infoIcon}>💰</span>
                    <div>
                      <div className={styles.infoLabel}>Salary</div>
                      <div className={styles.infoValue}>{job.salary}</div>
                    </div>
                  </div>
                )}
                {job.experience && (
                  <div className={styles.infoBox}>
                    <span className={styles.infoIcon}>🎓</span>
                    <div>
                      <div className={styles.infoLabel}>Experience</div>
                      <div className={styles.infoValue}>{job.experience}</div>
                    </div>
                  </div>
                )}
                {job.deadline && (
                  <div className={styles.infoBox}>
                    <span className={styles.infoIcon}>🗓</span>
                    <div>
                      <div className={styles.infoLabel}>Deadline</div>
                      <div className={styles.infoValue}>{formatDate(job.deadline)}</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Job Description</h2>
                <p className={styles.sectionText}>{job.description}</p>
              </div>

              {job.qualifications && (
                <div className={styles.section}>
                  <h2 className={styles.sectionTitle}>Qualifications & Requirements</h2>
                  <p className={styles.sectionText}>{job.qualifications}</p>
                </div>
              )}

              {/* Footer Meta */}
              <div className={styles.cardFooter}>
                <p className={styles.postedMeta}>
                  Posted: {formatDate(job.postedDate)}
                  {job.category && ` · Category: ${job.category}`}
                </p>
                <div className={styles.actions}>
                  {job.applicationLink ? (
                    <a
                      href={job.applicationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.btnApply}
                    >
                      Apply Now →
                    </a>
                  ) : (
                    <button className={styles.btnApply}>Apply Now</button>
                  )}
                  <Link href="/all-jobs" className={styles.btnBrowse}>
                    Browse More Jobs
                  </Link>
                </div>
              </div>
            </div>
          </main>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Quick Apply</h3>
              <div className={styles.sidebarMeta}>
                <span
                  className={styles.sidebarBadge}
                  style={{ background: badge.bg, color: badge.color }}
                >
                  {badge.label}
                </span>
                {job.salary && (
                  <div className={styles.sidebarSalary}>{job.salary}</div>
                )}
                <div className={styles.sidebarInfoRow}>
                  <span>📍</span> {job.location}
                </div>
                {job.experience && (
                  <div className={styles.sidebarInfoRow}>
                    <span>🎓</span> {job.experience}
                  </div>
                )}
                <div className={styles.sidebarInfoRow}>
                  <span>📅</span> Posted: {formatDate(job.postedDate)}
                </div>
              </div>
              {job.applicationLink ? (
                <a
                  href={job.applicationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.sidebarApplyBtn}
                >
                  Apply Now →
                </a>
              ) : (
                <button className={styles.sidebarApplyBtn}>Apply Now</button>
              )}
              <Link href="/all-jobs" className={styles.sidebarBrowseBtn}>
                Browse Similar Jobs
              </Link>
            </div>

            <div className={styles.sidebarAlert}>
              <div className={styles.alertTitle}>🔔 Get Job Alerts</div>
              <p className={styles.alertText}>Never miss opportunities like this one.</p>
              <Link href="/#subscribe" className={styles.alertBtn}>Subscribe Free</Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
