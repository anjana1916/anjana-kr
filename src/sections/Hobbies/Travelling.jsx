// sections/Hobbies/Travelling.jsx
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './TravellingStyles.module.css';
import ImageCarousel from '../../common/ImageCarousel'; // Import the carousel component

// Import the images directly (method 1)
import fin1 from '../../assets/travel/finland/fin1.jpg';
import fin2 from '../../assets/travel/finland/fin2.jpg';
import fin3 from '../../assets/travel/finland/fin3.jpg';
import fin4 from '../../assets/travel/finland/fin4.jpg';
import fin5 from '../../assets/travel/finland/fin5.jpg';
import fin6 from '../../assets/travel/finland/fin6.jpg';
import fin7 from '../../assets/travel/finland/fin7.jpg';
import fin8 from '../../assets/travel/finland/fin8.jpg';
import fin9 from '../../assets/travel/finland/fin9.jpg';
import fin10 from '../../assets/travel/finland/fin10.jpg';
import fin11 from '../../assets/travel/finland/fin11.jpg';
import fin12 from '../../assets/travel/finland/fin12.jpg';
import fin13 from '../../assets/travel/finland/fin13.jpg';
import la1 from '../../assets/travel/latvia/la1.jpg'
import la2 from '../../assets/travel/latvia/la2.jpg'
import la3 from '../../assets/travel/latvia/la3.jpg'
import la4 from '../../assets/travel/latvia/la4.jpg'
import la5 from '../../assets/travel/latvia/la5.jpg'
import la6 from '../../assets/travel/latvia/la6.jpg'
import la7 from '../../assets/travel/latvia/la7.jpg'
import li1 from '../../assets/travel/lithuania/li1.jpg'
import li2 from '../../assets/travel/lithuania/li2.jpg'
import swe1 from '../../assets/travel/sweden/swe1.jpg'
import swe2 from '../../assets/travel/sweden/swe2.jpg'
import swe3 from '../../assets/travel/sweden/swe3.jpg'
import swe4 from '../../assets/travel/sweden/swe4.jpg'
import po1 from '../../assets/travel/poland/po1.jpg'
import po2 from '../../assets/travel/poland/po2.jpg'
import po3 from '../../assets/travel/poland/po3.jpg'
import bel1 from '../../assets/travel/belgium/bel1.jpg'
import bel2 from '../../assets/travel/belgium/bel2.jpg'
import bel3 from '../../assets/travel/belgium/bel3.jpg'
import neth1 from '../../assets/travel/netherlands/am1.jpg' 
import neth2 from '../../assets/travel/netherlands/am2.jpg'
import neth3 from '../../assets/travel/netherlands/am3.jpg'
function Travelling() {
  const navigate = useNavigate();

  // Updated travel destinations with public folder image paths
  // For React to find images, they need to be in the public folder
  // or imported directly
  const travelDestinations = [
    {
      id: 1,
      name: "Helsinki, Finland",
      year: "2022",
      description: "City of lights and romance",
      images: [fin1, fin2, fin3, fin4, fin5, fin6, fin7, fin8, fin9, fin10, fin11, fin12, fin13],
    
    },
    {
      id: 2,
      name: "Riga, Latvia",
      year: "2022",
      description: "Modern meets traditional",
      // Using public folder path
      images: [la1, la2, la3, la4, la5, la6, la7],
    },
    {
      id: 3,
      name: "Vilnius, Lithuania",
      year: "2022",
      description: "Beautiful island getaway",
      images: [li1, li2],
    },
    {
      id: 4,
      name: "Warsaw, Poland",
      year: "2022",
      description: "The city that never sleeps",
      images: [po1, po2, po3],
    },
    {
      id: 5,
      name: "Stockholm, Sweden",
      year: "2022",
      description: "Scandinavian beauty and design",
      images: [swe1, swe2, swe3, swe4],
    },
    {
      id: 6,
      name: "Brussels, Belgium",
      year: "2022",
      description: "Historic charm and delicious cuisine",
      images: [bel1, bel2, bel3],
    },
    {
      id: 7,
      name: "Amsterdam, Netherlands",
      year: "2022",
      description: "Canals, culture, and cycling",
      images: [neth1, neth2, neth3],
    }
  ];
  
  return (
    <div className={styles.travellingContainer}>
      <div className={styles.backButtonContainer}>
        <button 
          onClick={() => navigate('/')}
          className={styles.backButton}
        >
          ←
        </button>
      </div>

      <div className={styles.heroSection}>
        <h1 className={styles.heroTitle}>My Travel Experiences</h1>
      </div>

      <section className={styles.contentSection}>
        <div className={styles.placesGrid}>
          {travelDestinations.map((place) => (
            <div key={place.id} className={styles.placeCard}>
              <div className={styles.placeholderImage}>
                <ImageCarousel 
                  images={place.images} 
                  altText={place.name} 
                />
              </div>
              <h3>{place.name}</h3>
              <p className={styles.year}>{place.year}</p>
              <p>{place.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Travelling;