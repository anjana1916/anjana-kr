import React from 'react';
import styles from './DashboardStyles.module.css';
import covidDashboardPdf from '../../assets/dashboards/covid-dashboard.pdf';
import homelessnessPdf from '../../assets/dashboards/forecast-dashboard.pdf';
import covidIcon from '../../assets/dashboards/virus.png';
import forecastIcon from '../../assets/dashboards/forecast.png';
import tableauIcon from '../../assets/dashboards/almonds.png'; // Add an icon for Tableau

function Dashboards() {
  const dashboards = [
    {
      title: "COVID-19 Global Metrics Dashboard",
      description: "Comprehensive visualization of global COVID-19 statistics including cases, deaths, and regional distribution across 191 countries.",
      pdfFile: covidDashboardPdf,
      thumbnail: covidIcon,
      link: null // No external link for this dashboard
    },
    {
      title: "Can California Keep Growing the World's Almonds?",
      description: "Analyzing the impact of climate change on America's largest tree nut industry from 2000-2023.",
      thumbnail: tableauIcon,
      link: "https://public.tableau.com/app/profile/anjana.karathat.rajeev/viz/DroughtandWildfiresCanCaliforniaKeepGrowingtheWorldsAlmonds/Dashboard1" // Replace with your Tableau Public URL
    },
    {
      title: "Predictive Homelessness Forecasting Dashboard",
      description: "Analyzing Australia's homelessness service coverage gaps and regional growth trends to identify priority intervention areas.",
      pdfFile: homelessnessPdf,
      thumbnail: forecastIcon,
      link: null // No external link for this dashboard
    }
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
              {dashboard.link ? (
                <a href={dashboard.link} target="_blank" rel="noopener noreferrer" className={styles.downloadLink}>
                  <button className="hover">View Dashboard</button>
                </a>
              ) : (
                <a href={dashboard.pdfFile} download className={styles.downloadLink}>
                  <button className="hover">Download PDF</button>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Dashboards;