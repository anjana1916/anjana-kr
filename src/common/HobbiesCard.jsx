// common/HobbiesCard.jsx
import { useNavigate } from 'react-router-dom';
import styles from '../sections/Hobbies/HobbiesStyles.module.css';

function HobbiesCard({ hobby }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (hobby.name === 'Travelling') {
      navigate('/travelling');
    } else if (hobby.name === 'Dancing') {
      navigate('/dancing');
    } else if (hobby.name === 'Cooking') {
      navigate('/cooking');
    }
  };

  return (
    <div className={styles.hobbyCard} onClick={handleClick}>
      <img 
        src={hobby.img} 
        alt={hobby.name} 
        className={styles.hobbyImageSmall}
      />
      <h3>{hobby.name}</h3>
      <p>{hobby.description}</p>
    </div>
  );
}

export default HobbiesCard;