'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={styles.navbar}>
      <div className={styles.navbarContainer}>

        {/* Logo + Hamburger */}
        <div className={styles.navbarBrand}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIcon}>🏢</div>
            <span className={styles.logoText}>Assam Job Alerts</span>
          </Link>

          <button
            className={`${styles.hamburgerMenu} ${menuOpen ? styles.active : ''}`}
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

        {/* Desktop Navigation */}
        <nav className={styles.navbarNav} aria-label="Main navigation">
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/all-jobs" className={styles.navLink}>All Jobs</Link>
          <Link href="/govt-jobs" className={styles.navLink}>Govt Jobs</Link>
          <Link href="/private-jobs" className={styles.navLink}>Private Jobs</Link>
          <Link href="/walk-ins" className={styles.navLink}>Walk-ins</Link>
        </nav>

        {/* Desktop Search */}
        <div className={styles.navbarSearch}>
          <input
            type="search"
            placeholder="Search jobs..."
            className={styles.searchInput}
            aria-label="Search jobs"
          />
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav
            id="mobile-menu"
            className={styles.mobileMenu}
            role="navigation"
            aria-label="Mobile navigation"
          >
            <Link href="/" className={styles.mobileMenuLink} onClick={closeMenu}>Home</Link>
            <Link href="/all-jobs" className={styles.mobileMenuLink} onClick={closeMenu}>All Jobs</Link>
            <Link href="/govt-jobs" className={styles.mobileMenuLink} onClick={closeMenu}>Govt Jobs</Link>
            <Link href="/private-jobs" className={styles.mobileMenuLink} onClick={closeMenu}>Private Jobs</Link>
            <Link href="/walk-ins" className={styles.mobileMenuLink} onClick={closeMenu}>Walk-ins</Link>
          </nav>
        )}

      </div>
    </header>
  )
}
