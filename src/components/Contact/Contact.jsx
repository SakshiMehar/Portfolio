import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { toast } from "react-toastify";

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

  // ---------------- VALIDATION RULES ----------------
  const validate = (name, value) => {
    let error = "";

    if (name === "name") {
      if (!/^[A-Za-z ]*$/.test(value)) {
        error = "Name can contain only letters.";
      }
      if (value.trim() === "") {
        error = "Name is required.";
      }
    }

    if (name === "phone") {
      if (!/^\d*$/.test(value)) {
        error = "Phone must contain only digits.";
      } else if (value.length !== 10) {
        error = "Phone must be 10 digits.";
      }
    }

    if (name === "email") {
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(value)) {
        error = "Enter a valid email address.";
      }
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // ---------------- INPUT CHANGE HANDLER ----------------
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Block unwanted characters immediately
    if (name === "name" && /[^A-Za-z ]/.test(value)) return;
    if (name === "phone" && /\D/.test(value)) return;

    setFormData({ ...formData, [name]: value });
    validate(name, value);
  };

  // ---------------- POPUP HANDLING ----------------
  const openForm = () => {
    setShowForm(true);
    document.body.classList.add("no-scroll"); // hides navbar
  };

  const closeForm = () => {
    setShowForm(false);
    document.body.classList.remove("no-scroll");
  };

  const sendEmail = (e) => {
  e.preventDefault();

  // Run validation again before submitting
  validate("name", formData.name);
  validate("phone", formData.phone);
  validate("email", formData.email);

  // BLOCK SUBMISSION if any field is empty
  if (!formData.name || !formData.phone || !formData.email || !formData.message) {
    toast.error("All fields are required.");
    return;
  }

  // BLOCK SUBMISSION if any error message exists
  if (
    errors.name !== "" ||
    errors.phone !== "" ||
    errors.email !== ""
  ) {
    toast.error("Please correct the errors before submitting.");
    return;
  }

  // EXTRA validation to prevent bypass
  if (!/^[A-Za-z ]+$/.test(formData.name)) {
    toast.error("Name can contain only letters.");
    return;
  }

  if (!/^\d{10}$/.test(formData.phone)) {
    toast.error("Phone must be exactly 10 digits.");
    return;
  }

  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email)) {
    toast.error("Enter a valid email address.");
    return;
  }

  
  emailjs
    .send(
      "service_myrt7dh",
      "template_w54fd94",
      {
    name: formData.name,
    email: formData.email,
    phone: formData.phone.no,
    message: formData.message,
  },
      "EHQBB0tEiOfXFyPp9"
      
    )
    .then(
      () => {
        toast.success("Message sent successfully!");
        closeForm();
        setFormData({ name: "", phone: "", email: "", message: "" });
      },
      () => {
        toast.error("Failed to send! Try again.");
      }
    );
};


  return (
    <section id="contact">
      <h2 className="contactTitle">Contact Me</h2>

      <span className="contactDesc">
        Feel free to reach out anytime. I'm always open to discuss new projects.
      </span>

      {/* SOCIAL ICONS */}
      <div className="contactIcons">
        <a href="https://www.facebook.com/sa.mehar.16/" target="_blank">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="https://www.linkedin.com/in/sakshi-mehar-s01/" target="_blank">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/SakshiMehar" target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="mailto:smehar2002@gmail.com">
          <i className="fa-regular fa-envelope"></i>
        </a>
      </div>

      {/* BUTTON TO OPEN FORM */}
      <button className="contactBtn" onClick={openForm}>
        Hire me
      </button>

      {/* POPUP FORM */}
      {showForm && (
        <div className="popupOverlay">
          <div className="popupForm">
            <h3>Send Me a Message</h3>

            <form onSubmit={sendEmail}>
              {/* NAME */}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="error">{errors.name}</p>}

              {/* PHONE */}
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                maxLength="10"
                required
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="error">{errors.phone}</p>}

              {/* EMAIL */}
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}

              {/* MESSAGE */}
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              {/* SUBMIT */}
              <button type="submit" className="submitBtn">
                Send Message
              </button>

              {/* CLOSE */}
              <button type="button" className="closeBtn" onClick={closeForm}>
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
