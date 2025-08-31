import React from 'react'
import styles from './PillarCard.module.css'

const PillarCard = ({ title, description, icon }) => {
  return (
    <div className={styles.pillarCard}>
      <div className={styles.pillarIcon}>
        {icon}
      </div>
      <h3 className={styles.pillarTitle}>{title}</h3>
      <p className={styles.pillarDescription}>{description}</p>
    </div>
  )
}

export default PillarCard
