import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-main">

      {/* Decorative Shapes */}
      <div className="shape blue"></div>
      <div className="shape pink"></div>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <span className="tag">Get In Touch</span>
          <h1>
            Let’s Plan Your <br />
            <span>Perfect Trip</span>
          </h1>

          <p>
            Have questions or need help planning your journey?
            Our travel experts are just one message away.
          </p>

          <div className="contact-cards">
            <div className="mini-card">📞 +91 98765 43210</div>
            <div className="mini-card">📧 contact@holidaysplanner.com</div>
            <div className="mini-card">📍 Shankar Nagar RAipur, India</div>
          </div>

          <div className="social-row">
            <div>Instagram</div>
            <div>Facebook</div>
            <div>WhatsApp</div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="contact-right">
          <h2>Send Message</h2>

          <form>
            <div className="row">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email" />
            </div>

            <input type="tel" placeholder="Phone Number" />
            <input type="text" placeholder="Destination / Subject" />
            <textarea placeholder="Tell us about your trip..."></textarea>

            <button>Send Inquiry</button>
          </form>
        </div>

      </div>

    </div>
  );
};

export default Contact;
