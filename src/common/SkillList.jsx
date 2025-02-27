import React from 'react';
import styles from '../sections/Skills/SkillsStyles.module.css';

function SkillList({ src, skill, description }) {
  return (
    <div className={styles.skillItem}>
      <span className={styles.skillName}>
        <img src={src} alt="checkmark" />
        {skill}
      </span>
      {description && <p className={styles.skillDescription}>{description}</p>}
    </div>
  );
}

export default SkillList;