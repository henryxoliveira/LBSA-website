import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
    setIsScrolled(false)
    // Scroll to top when route changes
    window.scrollTo(0, 0)
    
    // Handle hash links for smooth scrolling
    const handleHashScroll = () => {
      const hash = window.location.hash
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      }
    }
    
    handleHashScroll()
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (!isHome) {
      setIsScrolled(false)
      return
    }

    const onScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.85)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])


  // Handle escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/board', label: 'Board' },
    { path: '/alumni', label: 'Alumni' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <nav
      className={`${styles.navbar} ${isHome && !isScrolled && !isMenuOpen ? styles.overlay : ''}`}
      style={isHome ? {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        backgroundColor: (isScrolled || isMenuOpen) ? 'var(--white)' : 'transparent',
        borderBottom: (isScrolled || isMenuOpen) ? '1px solid var(--gray-200)' : 'none',
        boxShadow: (isScrolled || isMenuOpen) ? 'var(--shadow-sm)' : 'none',
      } : undefined}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className={styles.navBarInner}>
        <div className={styles.navContent}>
          <Link to="/" className={styles.logo} aria-label="LBSA home">
            LBSA
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
            </ul>
            <Link
              to="/membership"
              className={`${styles.joinButton} ${isActive('/membership') ? styles.active : ''}`}
              aria-current={isActive('/membership') ? 'page' : undefined}
            >
              Join
            </Link>
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
              <li>
                <Link
                  to="/membership"
                  className={`${styles.mobileNavLink} ${isActive('/membership') ? styles.active : ''}`}
                  aria-current={isActive('/membership') ? 'page' : undefined}
                >
                  Join
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
