// sections/Hobbies/Travelling.jsx
import { useNavigate } from 'react-router-dom';
import styles from './TravellingStyles.module.css';

function Travelling() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      {/* Back button container at the top */}
      <div className={styles.backButtonContainer}>
        <button 
          onClick={() => navigate('/')}
          className={styles.backButton}
        >
          ← Back to Home
        </button>
      </div>

      <section id="hobbies" className={styles.hobbiesSection}>
        <h1 className={styles.sectionTitle}>My Travel Experiences</h1>
        {/* Rest of your travel content */}
      </section>
    </div>
  );
}

export default Travelling;