import React from 'react';
import styles from './BigDataProjectsStyles.module.css';
import bigDataImage from '../../assets/diagram.jpg'; // Replace with your image path

function BigDataProjects() {
  const projects = [
    {
      title: "Azure Data Engineering Project",
      description: "End-to-end Azure data pipeline: ingestion, transformation, analytics using Medallion architecture.",
      image: bigDataImage,
      link: "https://github.com/anjana1916/Big-data-end-to-end-project/tree/main" // Replace with your GitHub link
    }
  ];

  return (
    <section id="big-data-projects" className={styles.container}>
      <h1 className="sectionTitle">Big Data Projects</h1>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <div className={styles.thumbnailContainer}>
              <img 
                src={project.image} 
                alt={project.title} 
                className={styles.thumbnail} 
              />
            </div>
            <div className={styles.projectInfo}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.viewLink}>
                <button className="hover">View on GitHub</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BigDataProjects;