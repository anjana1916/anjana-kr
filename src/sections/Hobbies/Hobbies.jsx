import React from 'react';
import styles from './HobbiesStyles.module.css';
import HobbiesCard from '../../common/HobbiesCard';
import dancingImg from '../../assets/dancing.png';
import travellingImg from '../../assets/suitcase.png';
import cookingImg from '../../assets/cooking.png';

function Hobbies() {
  const hobbies = [
    {
      name: 'Dancing',
      img: dancingImg,
      description: 'I love to dance and express myself through movement.'
    },
    {
      name: 'Travelling',
      img: travellingImg,
      description: 'Exploring new places and cultures is my passion.'
    },
    {
      name: 'Cooking',
      img: cookingImg,
      description: 'I enjoy experimenting with new recipes and flavors.'
    }
  ];

  return (
    <section id="hobbies" className={styles.hobbiesSection}>
      <h1 className={styles.sectionTitle}>My Hobbies</h1>
      <div className={styles.hobbiesGrid}>
        {hobbies.map((hobby, index) => (
          <HobbiesCard key={index} hobby={hobby} />
        ))}
      </div>
    </section>
  );
}

export default Hobbies;
