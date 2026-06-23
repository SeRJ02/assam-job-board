import styles from './StatsSection.module.css'

interface StatItem {
  id: string | number
  number: string | number
  label: string
}

interface StatsSectionProps {
  stats?: StatItem[]
}

const DEFAULT_STATS: StatItem[] = [
  { id: 1, number: '1000+', label: 'Active Jobs' },
  { id: 2, number: '500+', label: 'Companies' },
  { id: 3, number: '10K+', label: 'Job Seekers' },
  { id: 4, number: 'Daily', label: 'Updates' },
]

export default function StatsSection({ stats }: StatsSectionProps) {
  const items = stats && stats.length > 0 ? stats : DEFAULT_STATS

  return (
    <section className={styles.section} aria-label="Job statistics">
      <div className={styles.grid}>
        {items.map((stat) => (
          <div key={stat.id} className={styles.card}>
            <div className={styles.number}>{stat.number}</div>
            <div className={styles.label}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
