import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { photoBookYears } from '../App'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPhotoBookOpen, setIsPhotoBookOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
    setIsPhotoBookOpen(false)
  }, [location.pathname])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(`.${styles.dropdown}`)) {
        setIsPhotoBookOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        setIsPhotoBookOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const togglePhotoBook = () => {
    setIsPhotoBookOpen(!isPhotoBookOpen)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/board', label: 'Board' },
    { path: '/sponsorship', label: 'Sponsors' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <nav className={styles.navbar} role="navigation" aria-label="Main navigation">
      <div className="container">
        <div className={styles.navContent}>
          {/* Logo */}
          <Link to="/" className={styles.logo}>
            <span className={styles.logoText}>LBSA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`${styles.navLink} ${isActive(item.path) ? styles.active : ''}`}
                    aria-current={isActive(item.path) ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              
              {/* PhotoBook Dropdown */}
              <li className={styles.dropdown}>
                <button
                  className={`${styles.navLink} ${styles.dropdownToggle} ${isPhotoBookOpen ? styles.open : ''}`}
                  onClick={togglePhotoBook}
                  aria-expanded={isPhotoBookOpen}
                  aria-haspopup="true"
                >
                  Photo Book
                  <svg className={styles.dropdownIcon} width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                {isPhotoBookOpen && (
                  <ul className={styles.dropdownMenu} role="menu">
                    {photoBookYears.map((year) => (
                      <li key={year} role="none">
                        <Link
                          to={`/photobook/${year}`}
                          className={styles.dropdownItem}
                          role="menuitem"
                        >
                          {year}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuButton}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={styles.mobileNav}>
            <ul className={styles.mobileNavList}>
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`${styles.mobileNavLink} ${isActive(item.path) ? styles.active : ''}`}
                    aria-current={isActive(item.path) ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              
              {/* Mobile PhotoBook Options */}
              <li>
                <span className={styles.mobileNavLabel}>Photo Book</span>
                <ul className={styles.mobileSubList}>
                  {photoBookYears.map((year) => (
                    <li key={year}>
                      <Link
                        to={`/photobook/${year}`}
                        className={styles.mobileSubLink}
                      >
                        {year}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
