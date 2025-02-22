import { useNavigate } from 'react-router-dom';
import styles from './DancingStyles.module.css';

function Dancing() {
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
        <h1 className={styles.sectionTitle}>My Dancing Experiences</h1>
        {/* Rest of your dancing content */}
      </section>
    </div>
  );
}

export default Dancing;
