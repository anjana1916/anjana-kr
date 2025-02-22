import { useNavigate } from 'react-router-dom';
import styles from './CookingStyles.module.css';

function Cooking() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.backButtonContainer}>
        <button 
          onClick={() => navigate('/')}
          className={styles.backButton}
        >
          ← Back to Home
        </button>
      </div>

      <section id="hobbies" className={styles.hobbiesSection}>
        <h1 className={styles.sectionTitle}>My Cooking Experiences</h1>
        {/* Rest of your cooking content */}
      </section>
    </div>
  );
}

export default Cooking;
