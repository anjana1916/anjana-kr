// sections/Hobbies/Travelling.jsx
import { useNavigate } from 'react-router-dom';
import styles from './TravellingStyles.module.css';

function Travelling() {
  const navigate = useNavigate();

  return (
    <div className={styles.travellingContainer}>
      <div className={styles.backButtonContainer}>
        <button 
          onClick={() => navigate('/')}
          className={styles.backButton}
        >
          ← Back to Home
        </button>
      </div>

      <section id="hobbies" className={styles.hobbiesSection}>
        <h1 className={styles.sectionTitle}>MY TRAVEL EXPERIENCES</h1>
        {/* Add your travel content here */}
      </section>
    </div>
  );
}

export default Travelling;