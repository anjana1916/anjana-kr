import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">SKILLS</h1>
      
      {/* Programming Languages */}
      <h2 className={styles.categoryTitle}>PROGRAMMING LANGUAGES</h2>
      <div className={styles.skillList}>
        <div className={styles.skillItem}>
          <img src={checkMarkIcon} alt="checkmark" className={styles.checkmark} />
          <span>Python</span>
        </div>
        <div className={styles.skillItem}>
          <img src={checkMarkIcon} alt="checkmark" className={styles.checkmark} />
          <span>HTML</span>
        </div>
        <div className={styles.skillItem}>
          <img src={checkMarkIcon} alt="checkmark" className={styles.checkmark} />
          <span>CSS</span>
        </div>
        <div className={styles.skillItem}>
          <img src={checkMarkIcon} alt="checkmark" className={styles.checkmark} />
          <span>Bootstrap</span>
        </div>
        <div className={styles.skillItem}>
          <img src={checkMarkIcon} alt="checkmark" className={styles.checkmark} />
          <span>JavaScript</span>
        </div>
        <div className={styles.skillItem}>
          <img src={checkMarkIcon} alt="checkmark" className={styles.checkmark} />
          <span>R</span>
        </div>
      </div>
      <hr />
      
      {/* Machine Learning & AI */}
      <h2 className={styles.categoryTitle}>MACHINE LEARNING & AI</h2>
      <div className={styles.skillList}>
        <div className={styles.skillItem}>
          <img src={checkMarkIcon} alt="checkmark" className={styles.checkmark} />
          <span>Natural Language Processing (NLP)</span>
        </div>
        <div className={styles.skillItem}>
          <img src={checkMarkIcon} alt="checkmark" className={styles.checkmark} />
          <span>Computer Vision</span>
        </div>
        <div className={styles.skillItem}>
          <img src={checkMarkIcon} alt="checkmark" className={styles.checkmark} />
          <span>Predictive Modeling</span>
        </div>
        <div className={styles.skillItem}>
          <img src={checkMarkIcon} alt="checkmark" className={styles.checkmark} />
          <span>BioGPT & LLaMA</span>
        </div>
      </div>
      <hr />
      
      {/* Data Science & Analytics */}
      <h2 className={styles.categoryTitle}>DATA SCIENCE & ANALYTICS</h2>
      <div className={styles.skillList}>
        <div className={styles.skillItem}>
          <img src={checkMarkIcon} alt="checkmark" className={styles.checkmark} />
          <span>Data Cleaning & Preprocessing</span>
        </div>
        <div className={styles.skillItem}>
          <img src={checkMarkIcon} alt="checkmark" className={styles.checkmark} />
          <span>Feature Engineering</span>
        </div>
        <div className={styles.skillItem}>
          <img src={checkMarkIcon} alt="checkmark" className={styles.checkmark} />
          <span>Data Visualization</span>
        </div>
        <div className={styles.skillItem}>
          <img src={checkMarkIcon} alt="checkmark" className={styles.checkmark} />
          <span>Power BI & Tableau</span>
        </div>
        <div className={styles.skillItem}>
          <img src={checkMarkIcon} alt="checkmark" className={styles.checkmark} />
          <span>Statistical Analysis</span>
        </div>
      </div>
      <hr />
      
      {/* Backend & API Development */}
      <h2 className={styles.categoryTitle}>BACKEND & API DEVELOPMENT</h2>
      <div className={styles.skillList}>
        <div className={styles.skillItem}>
          <img src={checkMarkIcon} alt="checkmark" className={styles.checkmark} />
          <span>Flask</span>
        </div>
        <div className={styles.skillItem}>
          <img src={checkMarkIcon} alt="checkmark" className={styles.checkmark} />
          <span>HDFS & Hadoop</span>
        </div>
        <div className={styles.skillItem}>
          <img src={checkMarkIcon} alt="checkmark" className={styles.checkmark} />
          <span>React</span>
        </div>
      </div>
      <hr />
      
      {/* Cloud & Deployment */}
      <h2 className={styles.categoryTitle}>CLOUD & DEPLOYMENT</h2>
      <div className={styles.skillList}>
        <div className={styles.skillItem}>
          <img src={checkMarkIcon} alt="checkmark" className={styles.checkmark} />
          <span>CUDA & PyTorch</span>
        </div>
        <div className={styles.skillItem}>
          <img src={checkMarkIcon} alt="checkmark" className={styles.checkmark} />
          <span>Docker</span>
        </div>
      </div>
      <hr />
      
      {/* Web Scraping & Research */}
      <h2 className={styles.categoryTitle}>WEB SCRAPING & RESEARCH</h2>
      <div className={styles.skillList}>
        <div className={styles.skillItem}>
          <img src={checkMarkIcon} alt="checkmark" className={styles.checkmark} />
          <span>Scraping Research Papers</span>
        </div>
        <div className={styles.skillItem}>
          <img src={checkMarkIcon} alt="checkmark" className={styles.checkmark} />
          <span>Parsing & Structuring Medical Data</span>
        </div>
      </div>
      <hr />
      
      {/* Version Control & Collaboration */}
      <h2 className={styles.categoryTitle}>VERSION CONTROL & COLLABORATION</h2>
      <div className={styles.skillList}>
        <div className={styles.skillItem}>
          <img src={checkMarkIcon} alt="checkmark" className={styles.checkmark} />
          <span>Git & GitHub</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;