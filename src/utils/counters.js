// Simple counter animation utility using IntersectionObserver
// Progressive enhancement - works without JavaScript

export const animateCounter = (element, target, duration = 2000) => {
  if (!element || !target) return

  let start = 0
  const increment = target / (duration / 16) // 60fps
  const timer = setInterval(() => {
    start += increment
    if (start >= target) {
      element.textContent = target
      clearInterval(timer)
    } else {
      element.textContent = Math.floor(start)
    }
  }, 16)
}

export const setupCounters = () => {
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target
        const target = parseInt(element.dataset.target, 10)
        
        if (target && !element.dataset.animated) {
          element.dataset.animated = 'true'
          animateCounter(element, target)
        }
      }
    })
  }, observerOptions)

  // Find all elements with data-target attribute
  const counterElements = document.querySelectorAll('[data-target]')
  counterElements.forEach(element => {
    observer.observe(element)
  })

  return observer
}

// Usage:
// 1. Add data-target="150" to your counter element
// 2. Call setupCounters() when the component mounts
// 3. The counter will animate when it comes into view
