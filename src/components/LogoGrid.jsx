import React from 'react'
import styles from './LogoGrid.module.css'

const LogoGrid = ({ logos, title, subtitle }) => {
  return (
    <section className={styles.logoGridSection}>
      <div className="container">
        {title && (
          <div className={styles.logoGridHeader}>
            <h2 className={styles.logoGridTitle}>{title}</h2>
            {subtitle && (
              <p className={styles.logoGridSubtitle}>{subtitle}</p>
            )}
          </div>
        )}
        
        <div className={styles.logoGrid}>
          {logos.map((logo, index) => (
            <div key={index} className={styles.logoItem}>
              <img
                src={logo.src}
                alt={logo.alt}
                className={styles.logoImage}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LogoGrid
