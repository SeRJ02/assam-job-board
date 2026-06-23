'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>

        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M3 21H21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M5 21V7L12 3L19 7V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 21V15H15V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 11H10M14 11H15M9 7H10M14 7H15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          Assam Job Alerts
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.nav} aria-label="Main navigation">
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/all-jobs" className={styles.navLink}>All Jobs</Link>
          <Link href="/govt-jobs" className={styles.navLink}>Govt Jobs</Link>
          <Link href="/private-jobs" className={styles.navLink}>Private Jobs</Link>
          <Link href="/walk-ins" className={styles.navLink}>Walk-ins</Link>
        </nav>

        {/* Right side: search + buttons */}
        <div className={styles.right}>
          <input
            type="search"
            placeholder="Search jobs..."
            className={styles.searchInput}
            aria-label="Search jobs"
          />
          <button className={styles.btnLogin}>Login</button>
          <button className={styles.btnSignup}>Sign Up</button>
        </div>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span />
          <span />
          <span />
        </button>

      </div>

      {/* Mobile Menu */}
      <nav
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <Link href="/" className={styles.mobileNavLink} onClick={closeMenu}>Home</Link>
        <Link href="/all-jobs" className={styles.mobileNavLink} onClick={closeMenu}>All Jobs</Link>
        <Link href="/govt-jobs" className={styles.mobileNavLink} onClick={closeMenu}>Govt Jobs</Link>
        <Link href="/private-jobs" className={styles.mobileNavLink} onClick={closeMenu}>Private Jobs</Link>
        <Link href="/walk-ins" className={styles.mobileNavLink} onClick={closeMenu}>Walk-ins</Link>
        <div className={styles.mobileBtns}>
          <button className={styles.btnLogin}>Login</button>
          <button className={styles.btnSignup}>Sign Up</button>
        </div>
      </nav>

    </header>
  )
}
