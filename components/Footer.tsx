'use client'

import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>

      {/* Main Grid */}
      <div className={styles.mainContent}>
        <div className={styles.grid}>

          {/* Column 1: About + Social */}
          <div className={styles.col}>
            <div className={styles.logoWrap}>
              <div className={styles.logoIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M3 21H21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M5 21V7L12 3L19 7V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 21V15H15V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 11H10M14 11H15M9 7H10M14 7H15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className={styles.logoText}>Assam Job Alerts</span>
            </div>
            <p className={styles.aboutText}>
              Assam&apos;s most trusted job alert network providing daily updates on government, private,
              and contract roles across Northeast India.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} title="Facebook" aria-label="Facebook">f</a>
              <a href="#" className={styles.socialLink} title="Twitter" aria-label="Twitter">𝕏</a>
              <a href="#" className={styles.socialLink} title="LinkedIn" aria-label="LinkedIn">in</a>
              <a href="#" className={styles.socialLink} title="Instagram" aria-label="Instagram">ig</a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li><Link href="/" className={styles.linkItem}>Home</Link></li>
              <li><Link href="/all-jobs" className={styles.linkItem}>All Jobs</Link></li>
              <li><Link href="/govt-jobs" className={styles.linkItem}>Govt Jobs</Link></li>
              <li><Link href="/private-jobs" className={styles.linkItem}>Private Jobs</Link></li>
              <li><Link href="/walk-ins" className={styles.linkItem}>Walk-ins</Link></li>
            </ul>
          </div>

          {/* Column 3: For Job Seekers */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>For Job Seekers</h4>
            <ul className={styles.linkList}>
              <li><Link href="/all-jobs" className={styles.linkItem}>Browse Jobs</Link></li>
              <li><a href="#" className={styles.linkItem}>Resume Tips</a></li>
              <li><a href="#" className={styles.linkItem}>Interview Guide</a></li>
              <li><a href="#" className={styles.linkItem}>Blog</a></li>
              <li><a href="#" className={styles.linkItem}>FAQs</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact Us</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <span className={styles.contactText}>Guwahati, Assam<br />Northeast India</span>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>📧</span>
                <a href="mailto:info@assamjobalerts.com" className={styles.contactLink}>
                  info@assamjobalerts.com
                </a>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <a href="tel:+919876543210" className={styles.contactLink}>
                  +91 98765 43210
                </a>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>⏰</span>
                <span className={styles.contactText}>Mon – Fri: 9 AM – 6 PM<br />Sat – Sun: Closed</span>
              </li>
            </ul>
          </div>

        </div>

        <hr className={styles.divider} />

        {/* Bottom Row */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2024 <strong>Assam Job Alerts</strong>. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>Privacy Policy</a>
            <span className={styles.legalSep}>•</span>
            <a href="#" className={styles.legalLink}>Terms of Service</a>
            <span className={styles.legalSep}>•</span>
            <a href="#" className={styles.legalLink}>Contact</a>
            <span className={styles.legalSep}>•</span>
            <a href="#" className={styles.legalLink}>Sitemap</a>
          </div>
        </div>
      </div>

      {/* Green Bottom Bar */}
      <div className={styles.bottomBar}>
        <p className={styles.bottomBarText}>Made with ❤️ for Assam Job Seekers</p>
      </div>

    </footer>
  )
}
