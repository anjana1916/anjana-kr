import { useNavigate } from 'react-router-dom';
import styles from './CookingStyles.module.css';
import React, { useState } from 'react';


import dish1 from '../../assets/dishes/Biriyani.jpg';
import dish2 from '../../assets/dishes/caramel-custard.jpg';
import dish3 from '../../assets/dishes/cheesy-tacos.jpg';
import dish4 from '../../assets/dishes/chocolate-cake-buttercream.jpg';
import dish5 from '../../assets/dishes/chocolate-fudge-cake.jpg';
import dish6 from '../../assets/dishes/chocolate-tart1.jpg';
import dish7 from '../../assets/dishes/chocolate-cake-buttercream.jpg';
import dish8 from '../../assets/dishes/egg-roast.jpg';
import dish9 from '../../assets/dishes/pancake.jpg';
import dish10 from '../../assets/dishes/lemon-cake.jpg';
import dish11 from '../../assets/dishes/vannila-cake.jpg';
function Cooking() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');

  // This is placeholder data - replace with your actual dishes and photos
  const myDishes = [
    {
      id: 1,
      name: "Chicken Biryani",
      description: "Fragrant basmati rice cooked with spiced chicken, caramelized onions, and aromatic herbs.",
      category: "indian",
      image: dish1,
      date: "December 2020",
      difficulty: "Intermediate"
    },
    {
      id: 2,
      name: "Cheesy Tacos",
      description: "Crispy taco shells filled with seasoned meat, melted cheese, fresh vegetables, and zesty sauce.",
      category: "mexican",
      image: dish3,
      date: "March 2020",
      difficulty: "Easy"
    },
    {
      id: 3,
      name: "Lemon Cake",
      description: "Light and fluffy cake with a refreshing lemon flavor and tangy glaze.",
      category: "dessert",
      image: dish10,
      date: "January 2020",
      difficulty: "Intermediate"
    },
    {
      id: 4,
      name: "Chocolate Fudge Cake",
      description: "Rich, dense chocolate cake with a decadent fudgy texture and intense chocolate flavor.",
      category: "dessert",
      image: dish5,
      date: "February 2021",
      difficulty: "Intermediate"
    },
    {
      id: 5,
      name: "Chocolate Cake with Buttercream Frosting",
      description: "Moist chocolate layers covered with smooth, creamy buttercream frosting.",
      category: "dessert",
      image: dish4,
      date: "November 2021",
      difficulty: "Intermediate"
    },
    {
      id: 6,
      name: "Vanilla Cake",
      description: "Classic vanilla-flavored cake with a soft, tender crumb and delicate sweetness.",
      category: "dessert",
      image: dish11,
      date: "October 2021",
      difficulty: "Easy"
    },
    {
      id: 7,
      name: "Caramel Custard",
      description: "Silky smooth custard topped with golden caramel sauce, creating a perfect balance of flavors.",
      category: "dessert",
      image: dish2,
      date: "April 2020",
      difficulty: "Intermediate"
    },
    {
      id: 8,
      name: "Fluffy Pancakes",
      description: "Light and airy breakfast pancakes served with maple syrup and fresh berries.",
      category: "breakfast",
      image: dish9,
      date: "May 2020",
      difficulty: "Easy"
    },
    {
      id: 9,
      name: "Egg Roast",
      description: "Flavorful dish with eggs simmered in a spiced onion and tomato gravy.",
      category: "indian",
      image: dish8,
      date: "January 2021",
      difficulty: "Easy"
    },
    {
      id: 10,
      name: "Chocolate Tart",
      description: "Buttery, crisp pastry shell filled with rich, smooth chocolate ganache and a glossy finish.",
      category: "dessert",
      image: dish6,
      date: "June 2021",
      difficulty: "Intermediate"
    }
  ];

  // Get unique categories for filter buttons
  const categories = ['all', ...new Set(myDishes.map(dish => dish.category))];

  // Filter dishes by category
  const filteredDishes = activeCategory === 'all' 
    ? myDishes 
    : myDishes.filter(dish => dish.category === activeCategory);

  return (
    <div className={styles.cookingPage}>
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
          <h1>My Culinary Journey</h1>
          <p>Exploring flavors and cooking techniques from around the world</p>
        </div>
      </header>

      <div className={styles.container}>
        {/* Introduction Section */}
        <section className={styles.introSection}>
          <h2>My Cooking Philosophy</h2>
          <p>
            Cooking has always been more than just preparing food for me—it's a creative outlet, 
            a way to connect with different cultures, and a means to bring joy to those I share meals with. 
            My journey began with simple recipes and has evolved into exploring complex techniques and flavors.
          </p>
          <p>
            I believe in using fresh, seasonal ingredients and respecting their natural flavors. 
            Whether I'm recreating a traditional dish or experimenting with fusion cuisine, 
            I approach cooking with curiosity and a willingness to learn through both successes and failures.
          </p>
        </section>

        {/* Filter Buttons */}
        <section className={styles.filterSection}>
          <h2>My Creations</h2>
          <div className={styles.filterButtons}>
            {categories.map(category => (
              <button
                key={category}
                className={`${styles.filterButton} ${activeCategory === category ? styles.active : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </section>

        {/* Dishes Gallery */}
        <section className={styles.dishesSection}>
          <div className={styles.dishesGrid}>
            {filteredDishes.map(dish => (
              <div key={dish.id} className={styles.dishCard}>
                <div className={styles.dishImageContainer}>
                  <img src={dish.image} alt={dish.name} className={styles.dishImage} />
                  <div className={styles.dishDifficulty}>{dish.difficulty}</div>
                </div>
                <div className={styles.dishInfo}>
                  <h3>{dish.name}</h3>
                  <p className={styles.dishDate}>{dish.date}</p>
                  <p className={styles.dishDescription}>{dish.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cooking Tips Section */}
        <section className={styles.tipsSection}>
          <h2>My Cooking Tips</h2>
          <div className={styles.tipsList}>
            <div className={styles.tipCard}>
              <h3>Preparation is Key</h3>
              <p>Always read through the entire recipe and prepare all ingredients before starting. It makes the cooking process much smoother.</p>
            </div>
            <div className={styles.tipCard}>
              <h3>Taste as You Go</h3>
              <p>Don't wait until the end to taste your dish. Adjust seasonings throughout the cooking process.</p>
            </div>
            <div className={styles.tipCard}>
              <h3>Learn Basic Techniques</h3>
              <p>Mastering fundamental techniques like knife skills, sautéing, and understanding heat levels will elevate all your cooking.</p>
            </div>
          </div>
        </section>

        {/* My Kitchen Essentials */}
        <section className={styles.essentialsSection}>
  <h2>Kitchen Essentials I Can't Live Without</h2>
  <div className={styles.essentialsList}>
    <div className={styles.essentialItem}>
      <div className={styles.essentialIcon}>🔪</div>
      <h3>Chef's Knife</h3>
      <p>A quality chef's knife makes all the difference in food preparation.</p>
    </div>
    <div className={styles.essentialItem}>
      <div className={styles.essentialIcon}>🍲</div>
      <h3>Pressure Cooker</h3>
      <p>Perfect for quick and flavorful meals, especially for rice and curries.</p>
    </div>
    <div className={styles.essentialItem}>
      <div className={styles.essentialIcon}>🥣</div>
      <h3>Mixing Bowls</h3>
      <p>A variety of sizes for different preparation needs.</p>
    </div>
    <div className={styles.essentialItem}>
      <div className={styles.essentialIcon}>⚖️</div>
      <h3>Digital Scale</h3>
      <p>For precise measurements, especially in baking.</p>
    </div>
    <div className={styles.essentialItem}>
    <div className={styles.essentialIcon}>🍹</div>
      <h3>Good Blender</h3>
      <p>Essential for smooth batters, sauces, and perfect cake mixes.</p>
    </div>
  </div>
</section>
      </div>
    </div>
  );
}

export default Cooking;