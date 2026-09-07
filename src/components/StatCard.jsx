import React, { useEffect, useRef, useState } from 'react'
import styles from './StatCard.module.css'

const parseStatNumber = (number) => {
  const match = String(number).match(/^([^0-9]*)(\d+(?:\.\d+)?)(.*)$/)
  if (!match) {
    return { prefix: '', value: 0, suffix: String(number) }
  }

  return {
    prefix: match[1],
    value: Number(match[2]),
    suffix: match[3]
  }
}

const StatCard = ({ number, label, description }) => {
  const { prefix, value, suffix } = parseStatNumber(number)
  const [displayValue, setDisplayValue] = useState(0)
  const cardRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setDisplayValue(value)
      return
    }

    const node = cardRef.current
    if (!node) return

    let frameId

    const animate = () => {
      const duration = 1600
      const start = performance.now()

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - (1 - progress) ** 3
        setDisplayValue(Math.round(eased * value))
        if (progress < 1) {
          frameId = requestAnimationFrame(tick)
        }
      }

      frameId = requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            animate()
            observer.disconnect()
          }
        })
      },
      { threshold: 0.4 }
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frameId)
    }
  }, [value])

  return (
    <article className={styles.statCard} ref={cardRef}>
      <div className={styles.statNumber} aria-label={number}>
        {prefix}{displayValue}{suffix}
      </div>
      <h3 className={styles.statLabel}>{label}</h3>
      {description ? (
        <p className={styles.statDescription}>{description}</p>
      ) : null}
    </article>
  )
}

export const StatsGrid = ({ children }) => (
  <div className={styles.statsGrid}>{children}</div>
)

export default StatCard
