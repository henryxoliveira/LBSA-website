import React from 'react'
import styles from './StatCard.module.css'

const StatCard = ({ number, label, description }) => {
  return (
    <div className={styles.statCard}>
      <div className={styles.statNumber}>{number}</div>
      <h3 className={styles.statLabel}>{label}</h3>
      {description && (
        <p className={styles.statDescription}>{description}</p>
      )}
    </div>
  )
}

export default StatCard
