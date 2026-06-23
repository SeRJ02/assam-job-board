import HeroSection from '@/components/HeroSection'
import JobCard from '@/components/JobCard'
import Link from 'next/link'
import { getFeaturedJobs, getLatestJobs, getJobStats } from '@/lib/sanity'
import { getJobTypeBadgeColor, getJobTypeLabel, formatDate } from '@/lib/utils'
import styles from './Home.module.css'

export const revalidate = 60

export default async function Home() {
  const [featuredJobs, latestJobs, stats] = await Promise.all([
    getFeaturedJobs().catch(() => []),
    getLatestJobs(8).catch(() => []),
    getJobStats().catch(() => ({ totalJobs: 0, newThisMonth: 0, categories: 0, featuredJobs: 0 })),
  ])

  return (
    <>
      <HeroSection />

      {/* Stats Bar */}
      <section className={styles.statsBar}>
        <div className={styles.statsContainer}>
          {[
            { value: stats.totalJobs || '500+', label: 'Total Jobs' },
            { value: stats.newThisMonth || '120+', label: 'New This Month' },
            { value: stats.categories || '10+', label: 'Categories' },
            { value: stats.featuredJobs || '50+', label: 'Featured Jobs' },
          ].map((stat) => (
            <div key={stat.label} className={styles.statItem}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Section */}
      <section className={styles.mainSection}>
        <div className={styles.mainContainer}>

          {/* Section Header */}
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>Featured Opportunities</h2>
              <p className={styles.sectionSubtitle}>Hand-picked jobs from top employers across Assam</p>
            </div>
            <Link href="/all-jobs" className={styles.viewAllLink}>View All Jobs →</Link>
          </div>

          <div className={styles.contentGrid}>
            {/* Featured Jobs */}
            <div className={styles.featuredArea}>
              {featuredJobs.length > 0 ? (
                <div className={styles.jobsGrid}>
                  {featuredJobs.map((job) => (
                    <JobCard key={job._id} {...job} id={job._id} />
                  ))}
                </div>
              ) : (
                <div className={styles.emptyState}>
                  <div className={styles.emptyIcon}>🏢</div>
                  <h3 className={styles.emptyTitle}>No featured jobs yet</h3>
                  <p className={styles.emptyText}>Add jobs in your Sanity Studio and mark them as featured.</p>
                  <Link href="/all-jobs" className={styles.emptyBtn}>Browse All Jobs</Link>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className={styles.sidebar}>
              {/* Browse by Category */}
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarCardTitle}>Browse by Category</h3>
                <ul className={styles.categoryList}>
                  {[
                    { name: 'Agriculture', icon: '🌾' },
                    { name: 'Banking & Finance', icon: '🏦' },
                    { name: 'Engineering', icon: '⚙️' },
                    { name: 'Government Jobs', icon: '🏛️' },
                    { name: 'Health & Medical', icon: '🏥' },
                    { name: 'IT & Software', icon: '💻' },
                    { name: 'Police & Defence', icon: '🛡️' },
                    { name: 'Teaching & Education', icon: '📚' },
                    { name: 'Railway Jobs', icon: '🚂' },
                    { name: 'Hospitality & Tourism', icon: '🏨' },
                  ].map((cat) => (
                    <li key={cat.name}>
                      <Link
                        href={`/all-jobs?category=${encodeURIComponent(cat.name)}`}
                        className={styles.categoryLink}
                      >
                        <span className={styles.categoryIcon}>{cat.icon}</span>
                        <span>{cat.name}</span>
                        <span className={styles.categoryArrow}>→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Filters */}
              <div className={styles.quickFilters}>
                <h3 className={styles.quickFiltersTitle}>Quick Filters</h3>
                <div className={styles.filterLinks}>
                  {[
                    { label: '🏛️ Government Jobs', href: '/govt-jobs' },
                    { label: '🏢 Private Sector', href: '/private-jobs' },
                    { label: '📋 Contract Jobs', href: '/all-jobs?type=contract' },
                    { label: '🚶 Walk-in Drives', href: '/walk-ins' },
                  ].map((item) => (
                    <Link key={item.label} href={item.href} className={styles.filterLink}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Browse by District */}
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarCardTitle}>Browse by District</h3>
                <div className={styles.districtTags}>
                  {[
                    'Guwahati', 'Dibrugarh', 'Jorhat', 'Silchar', 'Nagaon',
                    'Tezpur', 'Tinsukia', 'Bongaigaon', 'Kamrup', 'Lakhimpur',
                  ].map((district) => (
                    <Link
                      key={district}
                      href={`/all-jobs?location=${encodeURIComponent(district)}`}
                      className={styles.districtTag}
                    >
                      {district}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Latest Jobs Feed */}
      <section className={styles.latestSection}>
        <div className={styles.mainContainer}>
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>Latest Jobs Feed</h2>
              <p className={styles.sectionSubtitle}>Fresh opportunities updated daily</p>
            </div>
            <Link href="/all-jobs" className={styles.viewAllLink}>Browse More →</Link>
          </div>

          {latestJobs.length > 0 ? (
            <div className={styles.latestJobsList}>
              {latestJobs.map((job) => (
                <div key={job._id} className={styles.latestJobItem}>
                  <div className={styles.latestJobContent}>
                    <div className={styles.latestJobInfo}>
                      <div className={styles.latestJobTitle}>{job.title}</div>
                      <div className={styles.latestJobMeta}>
                        <span>🏢 {job.company}</span>
                        <span>📍 {job.location}</span>
                        {job.salary && <span className={styles.salary}>💰 {job.salary}</span>}
                        <span>🗓 {formatDate(job.postedDate)}</span>
                      </div>
                      {job.description && (
                        <p className={styles.latestJobDesc}>{job.description}</p>
                      )}
                    </div>
                    <div className={styles.latestJobActions}>
                      <span className={`${styles.jobTypeBadge} ${styles[`badge_${job.jobType}`]}`}>
                        {getJobTypeLabel(job.jobType)}
                      </span>
                      <Link href={`/job/${job._id}`} className={styles.latestJobLink}>
                        View Details →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>📋</div>
              <h3 className={styles.emptyTitle}>No jobs yet</h3>
              <p className={styles.emptyText}>Add jobs in your Sanity Studio!</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className={styles.newsletterSection}>
        <div className={styles.newsletterContainer}>
          <div className={styles.newsletterContent}>
            <h2 className={styles.newsletterTitle}>Never Miss an Opportunity</h2>
            <p className={styles.newsletterText}>
              Get daily job alerts delivered to your inbox. Be the first to know about new openings.
            </p>
          </div>
          <div className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Enter your email address"
              className={styles.newsletterInput}
              aria-label="Email for newsletter"
            />
            <button className={styles.newsletterBtn}>Get Alerts Free</button>
          </div>
        </div>
      </section>
    </>
  )
}
