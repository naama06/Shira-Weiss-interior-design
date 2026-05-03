import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-card" data-aos="zoom-in">
        <h2>בואו נדבר</h2>
        <form action="https://formspree.io/f/maqaanrv" method="POST">
          <div className="form-group">
            <input 
              type="text" name="name" placeholder="שם מלא" 
              className="form-input"
              value={formData.name} onChange={handleChange} required 
            />
          </div>
          <div className="form-group">
            <input 
              type="tel" name="phone" placeholder="מספר טלפון" 
              className="form-input"
              value={formData.phone} onChange={handleChange} required 
            />
          </div>
          <div className="form-group">
            <textarea 
              name="message" placeholder="ספרו לנו קצת על הפרויקט שלכם" 
              className="form-textarea" rows="4"
              value={formData.message} onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">שליחת פרטים</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;