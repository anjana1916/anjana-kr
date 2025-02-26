import { useState } from 'react';
import styles from '../sections/Hobbies/TravellingStyles.module.css';

function ImageCarousel({ images, altText }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setImageError(false);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setImageError(false);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselImageContainer}>
        {imageError ? (
          <div className={styles.errorImage}>Image not found</div>
        ) : (
          <img 
            src={images[currentIndex]} 
            alt={`${altText} - image ${currentIndex + 1}`} 
            className={styles.carouselImage} 
            onError={handleImageError}
          />
        )}
        
        {images.length > 1 && (
          <>
            <button 
              onClick={prevImage} 
              className={`${styles.carouselBtn} ${styles.prevBtn}`}
              aria-label="Previous image"
            >
              &#10094;
            </button>
            <button 
              onClick={nextImage} 
              className={`${styles.carouselBtn} ${styles.nextBtn}`}
              aria-label="Next image"
            >
              &#10095;
            </button>
            <div className={styles.carouselIndicators}>
              {images.map((_, index) => (
                <span 
                  key={index} 
                  className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
                  onClick={() => setCurrentIndex(index)}
                ></span>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ImageCarousel;