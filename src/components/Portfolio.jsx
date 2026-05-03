import React from 'react';


const Portfolio = () => {
  const projects = [
    { id: 1, src: "/images/p1.jpg" },
    { id: 2, src: "/images/p2.jpg" },
    { id: 3, src: "/images/p3.jpg" },
    { id: 4, src: "/images/p4.jpg" },
    { id: 5, src: "/images/p5.jpg" },
    { id: 6, src: "/images/p6.jpg" },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="section-title">פרויקטים נבחרים</h2>
        <div className="clean-gallery">
          {projects.map((project) => (
            <div key={project.id} className="gallery-item" data-aos="fade-up">
              <img src={project.src} alt={`Project ${project.id}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;