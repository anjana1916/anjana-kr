import React from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import
import styles from './DancingStyles.module.css';

// Import sample images (replace with your actual images)
import danceSample1 from '../../assets/dance1.jpg';
import danceSample2 from '../../assets/dance2.jpg';
import danceSample3 from '../../assets/dance3.jpg';
import danceSample4 from '../../assets/dance4.png';
import danceSample5 from '../../assets/dance5.jpg';
import danceSample6 from '../../assets/dance6.jpg';
import danceSample7 from '../../assets/dance7.jpg';
import danceSample8 from '../../assets/dance8.jpg';

// Import video files (replace with your actual video paths)
import danceVideo1 from '../../assets/vid1.mp4';
import danceVideo2 from '../../assets/vid2.mp4';
import danceVideo3 from '../../assets/vid3.mp4';
import danceVideo4 from '../../assets/vid4.mp4';

function DancingPage() {
  const navigate = useNavigate(); // Add this hook
  
  // Journey milestones data
  const journeyMilestones = [
    {
      year: '2005',
      title: 'First Dance Class',
      description: 'Started learning Cinematic dance and began my journey in the world of movement.'
    },
    {
      year: '2006',
      title: 'First Performance',
      description: 'Performed on stage for the first time in the same year I began dancing.'
    },
    {
      year: '2007',
      title: 'Bharatanatyam Beginning',
      description: 'Started learning Bharatanatyam, a classical Indian dance form rich in tradition.'
    },
    {
      year: '2008',
      title: 'First Bharatanatyam Performance',
      description: 'Performed Bharatanatyam on stage for the first time after a year of training.'
    },
    {
      year: '2015',
      title: 'Contemporary Dance',
      description: 'Expanded my repertoire by beginning to learn Contemporary dance styles.'
    }
  ];

  // Dance styles data
  const danceStyles = [
    {
      name: 'Bharatanatyam',
      description: 'Classical Indian dance form characterized by intricate footwork, expressive gestures, and storytelling.'
    },
    {
      name: 'Cinematic',
      description: 'Dynamic dance style inspired by film choreography, combining theatrical elements with various techniques.'
    },
    {
      name: 'Contemporary',
      description: 'Modern expressive style blending various techniques with fluid movements and personal interpretation.'
    }
  ];
  // Gallery images
  const galleryImages = [
    { src: danceSample1, alt: 'Ballet practice' },
    { src: danceSample2, alt: 'Contemporary performance' },
    { src: danceSample3, alt: 'Dance workshop' },
    { src: danceSample4, alt: 'Dance rehearsal' },
    { src: danceSample5, alt: 'Group choreography' },
    { src: danceSample6, alt: 'Solo performance' },
    { src: danceSample7, alt: 'Behind the Scenes' }
  ];

  // Video showcase data with direct video files
  const videoShowcase = [
    {
      title: 'Group Choreography',
      videoSrc: danceVideo1,
      posterSrc: danceSample1, // Use one of your images as a poster/thumbnail
      description: 'Collaborative piece with my dance troupe showcasing synchronized movements'
    },
    {
      title: 'Group Reel',
      videoSrc: danceVideo2,
      posterSrc: danceSample6,
      description: 'Collaborative piece with my dance troupe showcasing synchronized movements.'
    },
    {
      title: 'Duo Choreography',
      videoSrc: danceVideo4,
      posterSrc: danceSample8,
      description: 'Collaborative piece with my dance partner.'
    },
    {
      title: 'Group Reel',
      videoSrc: danceVideo3,
      posterSrc: danceSample4,
      description: 'Collaborative piece with my dance troupe showcasing synchronized movements.'
    }
  ];

  return (
    
    <div className={styles.dancingPage}>
      <div className={styles.backButtonContainer}>
              <button 
                onClick={() => navigate('/')}
                className={styles.backButton}
              >
                ←
              </button>
            </div>
      <header className={styles.pageHeader}>
        <div className={styles.headerContent}>
          <h1>My Dance Journey</h1>
          <p>Expressing emotions through movement</p>
        </div>
      </header>

      <div className={styles.container}>
        

        {/* Introduction Section */}
        <section className={styles.introSection}>
          <h2>Why I Dance</h2>
          <p>
          Dancing has been woven into the fabric of my life since childhood.
          My mother often recounts how, as a toddler, I would instinctively move to any melody that reached my ears.
          It was she who guided me to my first formal dance class, her eyes bright with pride as she watched me take those initial steps
           into a world she herself knew intimately. As a dancer herself, she created a beautiful inheritance that passed from mother to child—a 
           shared language of music and motion that connects us to this day.
          </p>
          <p>
            Through dance, I've discovered not just an art form, but a path to self-discovery, 
            discipline, and joy. Each style I learn opens new ways to communicate and connect 
            with both myself and audiences.
          </p>
        </section>

        {/* Journey Timeline */}
        <section className={styles.timelineSection}>
          <h2>My Dance Evolution</h2>
          <div className={styles.timeline}>
            {journeyMilestones.map((milestone, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineMarker}></div>
                <div className={styles.timelineContent}>
                  <h3>{milestone.year}: {milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dance Styles */}
        <section className={styles.stylesSection}>
          <h2>Dance Styles</h2>
          <div className={styles.stylesGrid}>
            {danceStyles.map((style, index) => (
              <div key={index} className={styles.styleCard}>
                <h3>{style.name}</h3>
                <p>{style.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Photo Gallery */}
        <section className={styles.gallerySection}>
          <h2>Dance Gallery</h2>
          <div className={styles.photoGrid}>
            {galleryImages.map((image, index) => (
              <div key={index} className={styles.photoItem}>
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
        </section>

        {/* Video Showcase with direct video embeds */}
        <section className={styles.videoSection}>
          <h2>Performance Videos</h2>
          <div className={styles.videoGrid}>
            {videoShowcase.map((video, index) => (
              <div key={index} className={styles.videoItem}>
                <div className={styles.videoWrapper}>
                  <video 
                    controls
                    poster={video.posterSrc}
                    preload="metadata"
                    className={styles.videoPlayer}
                  >
                    <source src={video.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default DancingPage;