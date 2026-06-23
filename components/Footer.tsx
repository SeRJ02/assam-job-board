'use client'

import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>

      {/* Newsletter */}
      <section className={styles.newsletter}>
        <div className={styles.newsletterInner}>
          <div>
            <h3 className={styles.newsletterTitle}>Get Daily Job Alerts</h3>
            <p className={styles.newsletterDesc}>
              Subscribe to receive the latest job opportunities directly in your inbox
            </p>
          </div>
          <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.newsletterInput}
              aria-label="Email address"
            />
            <button type="submit" className={styles.newsletterButton}>
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <div className={styles.grid}>

          {/* About */}
          <div>
            <h4 className={styles.colTitle}>About Assam Job Alerts</h4>
            <p className={styles.aboutText}>
              Assam's most trusted job alert network providing daily updates on government, private,
              and contract roles across Northeast India.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} title="Facebook" aria-label="Facebook">f</a>
              <a href="#" className={styles.socialLink} title="Twitter" aria-label="Twitter">𝕏</a>
              <a href="#" className={styles.socialLink} title="LinkedIn" aria-label="LinkedIn">in</a>
              <a href="#" className={styles.socialLink} title="Instagram" aria-label="Instagram">📷</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li><Link href="/" className={styles.linkItem}>Home</Link></li>
              <li><Link href="/all-jobs" className={styles.linkItem}>All Jobs</Link></li>
              <li><Link href="/govt-jobs" className={styles.linkItem}>Government Jobs</Link></li>
              <li><Link href="/private-jobs" className={styles.linkItem}>Private Jobs</Link></li>
              <li><Link href="/walk-ins" className={styles.linkItem}>Walk-in Interviews</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className={styles.colTitle}>Resources</h4>
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.linkItem}>Resume Tips</a></li>
              <li><a href="#" className={styles.linkItem}>Interview Guide</a></li>
              <li><a href="#" className={styles.linkItem}>Career Advice</a></li>
              <li><a href="#" className={styles.linkItem}>Blog</a></li>
              <li><a href="#" className={styles.linkItem}>FAQs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
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

        {/* Bottom row */}
        <div className={styles.bottom}>
          <p className={styles.bottomText}>
            <strong className={styles.bottomTextStrong}>Assam Job Alerts</strong> is committed to helping
            job seekers find opportunities in Northeast India. We provide daily updates on government,
            private, and contract job positions.
            <br />© 2024 Assam Job Alerts. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>Privacy Policy</a>
            <span className={styles.legalSep}>•</span>
            <a href="#" className={styles.legalLink}>Terms of Service</a>
            <span className={styles.legalSep}>•</span>
            <a href="#" className={styles.legalLink}>Contact</a>
            <span className={styles.legalSep}>•</span>
            <a href="#" className={styles.legalLink}>Sitemap</a>
            <span className={styles.legalSep}>•</span>
            <a href="#" className={styles.legalLink}>Feedback</a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomBarInner}>
          <p>Made with ❤️ for Assam Job Seekers | Helping you find your next opportunity</p>
          <div className={styles.bottomBarLinks}>
            <a href="#" className={styles.bottomBarLink}>Report an Issue</a>
            <span className={styles.bottomBarSep}>•</span>
            <a href="#" className={styles.bottomBarLink}>Advertise with Us</a>
            <span className={styles.bottomBarSep}>•</span>
            <a href="#" className={styles.bottomBarLink}>Partner Program</a>
          </div>
        </div>
      </div>

    </footer>
  )
}
