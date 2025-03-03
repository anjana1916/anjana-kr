import React from 'react';
import styles from './DashboardStyles.module.css';
import covidDashboardPdf from '../../assets/dashboards/covid-dashboard.pdf';
// Import the SVG icon correctly
import covidIcon from '../../assets/dashboards/virus.png';

function Dashboards() {
  const dashboards = [
    {
      title: "COVID-19 Global Metrics Dashboard",
      description: "Comprehensive visualization of global COVID-19 statistics including cases, deaths, and regional distribution across 191 countries.",
      pdfFile: covidDashboardPdf,
      thumbnail: covidIcon
    },
  ];

  return (
    <section id="dashboards" className={styles.container}>
      <h1 className="sectionTitle">Dashboards</h1>
      
      <div className={styles.dashboardsGrid}>
        {dashboards.map((dashboard, index) => (
          <div key={index} className={styles.dashboardCard}>
            <div className={styles.thumbnailContainer}>
              {dashboard.thumbnail ? (
                <img 
                  src={dashboard.thumbnail} 
                  alt={dashboard.title} 
                  className={styles.thumbnail} 
                />
              ) : (
                <div className={styles.thumbnailPlaceholder}>
                  <span>{dashboard.title}</span>
                </div>
              )}
            </div>
            <div className={styles.dashboardInfo}>
              <h3>{dashboard.title}</h3>
              <p>{dashboard.description}</p>
              <a href={dashboard.pdfFile} download className={styles.downloadLink}>
                <button className="hover">Download PDF</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Dashboards;