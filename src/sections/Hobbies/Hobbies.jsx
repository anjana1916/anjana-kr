import React from 'react';
import styles from './HobbiesStyles.module.css';
import { useNavigate } from 'react-router-dom';
import dancingImg from '../../assets/dancing.png';
import travellingImg from '../../assets/suitcase.png';
import cookingImg from '../../assets/cooking.png';

function Hobbies() {
  const navigate = useNavigate();
  
  const hobbies = [
    {
      name: 'Dancing',
      img: dancingImg,
      description: 'I love to dance and express myself through movement.',
      path: '/dancing'
    },
    {
      name: 'Travelling',
      img: travellingImg,
      description: 'Exploring new places and cultures is my passion.',
      path: '/travelling'
    },
    {
      name: 'Cooking',
      img: cookingImg,
      description: 'I enjoy experimenting with new recipes and flavors.',
      path: '/cooking'
    }
  ];

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <section id="hobbies" className={styles.hobbiesSection}>
      <h1 className={styles.sectionTitle}>MY HOBBIES</h1>
      <div className={styles.hobbiesGrid}>
        {hobbies.map((hobby, index) => (
          <div 
            key={index} 
            className={styles.hobbyCard} 
            onClick={() => handleClick(hobby.path)}
          >
            <img 
              src={hobby.img} 
              alt={hobby.name} 
              className={styles.hobbyImageSmall}
            />
            <h3>{hobby.name}</h3>
            <p>{hobby.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hobbies;