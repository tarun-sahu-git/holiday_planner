import React from 'react'
import './Header.css'

function Footer() {
  return (
    <>
      <div className="footer_main">
        <div className="footer_container">

          {/* About */}
          <div className="footer_section about">
            <h3>Holidays planner</h3>
            <p>
              Explore the world with us! Discover top destinations, travel packages,
              and easy planning tools all in one platform.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer_section links">
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>Places</li>
              <li>Travel Guide</li>
              <li>Packages</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer_section support">
            <h4>Support</h4>
            <ul>
              <li>FAQs</li>
              <li>Help Center</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer_section newsletter">
            <h4>Subscribe to Newsletter</h4>
            <p>Get latest offers and travel updates directly to your inbox.</p>
            <div className="newsletter_input">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer_bottom">
          <p>Follow us on</p>

          <div className="social_icons">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>

          <p>© 2026 195 Holidays. All rights reserved.</p>
        </div>
      </div>
    </>
  )
}

export default Footer
