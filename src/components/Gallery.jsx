import React, { useState, useEffect } from 'react'
import styles from './Gallery.module.css'

const Gallery = ({ images, title }) => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openModal = (index) => {
    setSelectedImage(images[index])
    setCurrentIndex(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length
    setSelectedImage(images[nextIndex])
    setCurrentIndex(nextIndex)
  }

  const prevImage = () => {
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1
    setSelectedImage(images[prevIndex])
    setCurrentIndex(prevIndex)
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!selectedImage) return

      switch (event.key) {
        case 'Escape':
          closeModal()
          break
        case 'ArrowRight':
          nextImage()
          break
        case 'ArrowLeft':
          prevImage()
          break
        default:
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, currentIndex, images])

  return (
    <div className={styles.gallery}>
      {title && <h2 className={styles.galleryTitle}>{title}</h2>}
      
      <div className={styles.galleryGrid}>
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.galleryItem}
            onClick={() => openModal(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                openModal(index)
              }
            }}
            aria-label={`Open ${image.alt || `image ${index + 1}`}`}
          >
            <img
              src={image.src}
              alt={image.alt || `Gallery image ${index + 1}`}
              className={styles.galleryImage}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeButton}
              onClick={closeModal}
              aria-label="Close modal"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <button
              className={`${styles.navButton} ${styles.prevButton}`}
              onClick={prevImage}
              aria-label="Previous image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <button
              className={`${styles.navButton} ${styles.nextButton}`}
              onClick={nextImage}
              aria-label="Next image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <img
              src={selectedImage.src}
              alt={selectedImage.alt || 'Selected image'}
              className={styles.modalImage}
            />
            
            {selectedImage.alt && (
              <div className={styles.imageCaption}>
                <p>{selectedImage.alt}</p>
              </div>
            )}
            
            <div className={styles.imageCounter}>
              {currentIndex + 1} of {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
