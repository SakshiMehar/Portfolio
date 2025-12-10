import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="contactTitle">Contact Me</h2>
      <span className="contactDesc">
        Feel free to reach out anytime. I'm always open to discuss new projects, collaborations, or opportunities.
      </span>

      <div className="contactIcons">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="mailto:someone@gmail.com">
          <i className="fa-regular fa-envelope"></i>
        </a>
      </div>

      <footer className="contactFooter">
        <p>📞 9399390250</p>
      </footer>
    </section>
  );
};

export default Contact;
