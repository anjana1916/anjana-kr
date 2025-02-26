// sections/Hobbies/Travelling.jsx
import { useNavigate } from 'react-router-dom';
import styles from './TravellingStyles.module.css';

function Travelling() {
  const navigate = useNavigate();

  // Sample travel destinations - replace with your own data
  const travelDestinations = [
    {
      id: 1,
      name: "Helsinki, Finland",
      year: "2022",
      description: "City of lights and romance",
      imagePath: "/images/paris.jpg" // Your image path here
    },
    {
      id: 2,
      name: "Riga, Latvia",
      year: "2022",
      description: "Modern meets traditional",
      imagePath: "/images/tokyo.jpg" // Your image path here
    },
    {
      id: 3,
      name: "Vilnius, Lithuania",
      year: "2022",
      description: "Beautiful island getaway",
      imagePath: "/images/santorini.jpg" // Your image path here
    },
    {
      id: 4,
      name: "Warsaw, Poland",
      year: "2022",
      description: "The city that never sleeps",
      imagePath: "/images/newyork.jpg" // Your image path here
    },
    {
      id: 5,
      name: "Stockholm, Sweden",
      year: "2022",
      description: "The city that never sleeps",
      imagePath: "/images/newyork.jpg" // Your image path here
    },
    {
      id: 6,
      name: "Brussels, Belgium",
      year: "2022",
      description: "The city that never sleeps",
      imagePath: "/images/newyork.jpg" // Your image path here
    },
    {
      id: 7,
      name: "Amsterdam, Netherlands",
      year: "2022",
      description: "The city that never sleeps",
      imagePath: "/images/newyork.jpg" // Your image path here
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
                <img 
                  src={place.imagePath} 
                  alt={place.name} 
                  className={styles.placeImage}
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