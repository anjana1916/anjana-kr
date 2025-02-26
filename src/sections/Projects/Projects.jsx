import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/book.png';
import freshBurger from '../../assets/better-health.png';
import hipsster from '../../assets/cursor.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/anjana1916/Predicting-the-knowledge-level-of-Users"
          h3="Predicting knowledge level"
          p="Machine Learning Project"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/anjana1916/Comparing-Logistics-Regression-and-Decision-tree-classifier-in-predicting-Prevalent-Hypertension"
          h3="Predicting Prevalent Hypertension"
          p="Comparing Classifiers"
        />
        <ProjectCard
          src={hipsster}
          link="https://mdquiz.vipresearch.ca/"
          h3="Quiz Difficulty Analysis"
          p="Mouse Dynamics Project"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Project 4"
          p="Project 4"
        />
      </div>
    </section>
  );
}

export default Projects;