import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
  });

  // VALIDATION RULES
  const validate = (name, value) => {
    let error = "";

    if (name === "name") {
      if (!/^[A-Za-z ]+$/.test(value)) {
        error = "Name can contain only letters.";
      }
    }

    if (name === "phone") {
      if (!/^\d{10}$/.test(value)) {
        error = "Phone must be exactly 10 digits.";
      }
    }

    if (name === "email") {
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(value)) {
        error = "Enter a valid email address.";
      }
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // Handle input change + validate
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setFormData({ ...formData, [name]: value });
    validate(name, value);
  };

  // Send Email
  const sendEmail = (e) => {
    e.preventDefault();

    // If any error remains, do not submit
    if (errors.name || errors.phone || errors.email) {
      alert("Please fix the errors before submitting.");
      return;
    }

    emailjs
      .send(
        "service_myrt7dh",
        "template_w54fd94",
        formData,
        "EHQBB0tEiOfXFyPp9"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setShowForm(false);
          setFormData({ name: "", phone: "", email: "", message: "" });
        },
        () => {
          alert("Failed to send! Try again.");
        }
      );
  };

  return (
    <section id="contact">
      <h2 className="contactTitle">Contact Me</h2>

      <span className="contactDesc">
        Feel free to reach out anytime. I'm always open to discuss new projects.
      </span>

      {/* CONTACT ICONS */}
      <div className="contactIcons">
        <a href="#" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
        <a href="#" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
        <a href="#" target="_blank"><i className="fa-brands fa-github"></i></a>
        <a href="mailto:someone@gmail.com"><i className="fa-regular fa-envelope"></i></a>
      </div>

      {/* BUTTON TO OPEN FORM */}
      <button className="contactBtn" onClick={() => setShowForm(true)}>
        Contact Form
      </button>

      {/* POPUP FORM */}
      {showForm && (
        <div className="popupOverlay">
          <div className="popupForm">
            <h3>Send Me a Message</h3>

            <form onSubmit={sendEmail}>
              
              {/* NAME INPUT */}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                onChange={handleChange}
              />
              {errors.name && <p className="error">{errors.name}</p>}

              {/* PHONE INPUT */}
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                onChange={handleChange}
                maxLength="10"
              />
              {errors.phone && <p className="error">{errors.phone}</p>}

              {/* EMAIL INPUT */}
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}

              {/* MESSAGE */}
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                required
                onChange={handleChange}
              ></textarea>

              <button type="submit" className="submitBtn">
                Send Message
              </button>

              <button
                type="button"
                className="closeBtn"
                onClick={() => setShowForm(false)}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}

      <footer className="contactFooter">
        <p>📞 9399390250</p>
      </footer>
    </section>
  );
};

export default Contact;
