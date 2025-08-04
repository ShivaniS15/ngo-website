import React from 'react';
// import '../App.css'; // uses shared styling

const HomePage = () => {
  return (
    <section className="home-header">
      <div className="home-content">
        <h1>Welcome to Helping Hands</h1>
        <p className="home-subtitle">
          We are a non-profit organization dedicated to empowering communities through education, healthcare, and social support.
        </p>

        <div className="home-actions">
          <a href="/volunteer">
            <button className="home-btn">Become a Volunteer</button>
          </a>
        </div>

        <div className="home-image">
          <img src="https://c.pxhere.com/images/bb/dd/2da20e163ee89be2984ad65b6990-1450665.jpg!d" alt="Helping hands" />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
