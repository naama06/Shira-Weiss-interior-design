import React from 'react';

const AboutItem = ({ number, title, text }) => (
  <div className="about-item" data-aos="fade-up">
    <span className="about-number">{number}</span>
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
);

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">הפילוסופיה שלנו</h2>
        <div className="about-grid">
          <AboutItem 
            number="01" 
            title="הקשבה" 
            text="תרגום החזון שלכם למציאות מעוצבת." 
          />
          <AboutItem 
            number="02" 
            title="תכנון" 
            text="ירידה לפרטים ליצירת חלל הרמוני." 
          />
          <AboutItem 
            number="03" 
            title="ליווי" 
            text="ביטחון ושקט נפשי לכל אורך הדרך." 
          />
        </div>
      </div>
    </section>
  );
};

export default About;