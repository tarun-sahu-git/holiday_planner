import React from 'react';
import './About.css';
import { FaCalendarAlt, FaMapMarkerAlt, FaBriefcase, FaStar, FaPlane, FaUsers, FaHotel, FaRoute, FaMapSigns } from "react-icons/fa";

function About() {
  return (
    <>
      <div className="about_main">

        {/* Hero / Title Section */}
        <section className="about_hero">
          <div className="hero_content">
            <h1>About Holidays Planner</h1>
            <p>Your trusted travel partner from Raipur, making journeys memorable since 2018.</p>
          </div>
        </section>

        {/* Story Section */}
        <section className="about_story">
          <div className="story_image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIOgJIbj_NmOF9UvxzMXkJejE30LdFdFKpgTBXuH-LNw&s=10" alt="Travel Experience" />
          </div>
          <div className="story_content">
            <h2>Our Story</h2>
            <p>
              Holidays Planner started its journey in 2018 in Shankar Nagar, Raipur, Chhattisgarh. Since then,
              our mission has been simple — make travel easy and enjoyable for all.
            </p>
            <p>
              From local outings to international trips, our team ensures seamless planning and
              world-class support every step of the way.
            </p>
          </div>
        </section>

        {/* Company Info Grid */}
        <section className="about_info_grid">
          <div className="info_card">
            <FaCalendarAlt className="info_icon" />
            <h3>Established</h3>
            <p>2018</p>
          </div>

          <div className="info_card">
            <FaMapMarkerAlt className="info_icon" />
            <h3>Location</h3>
            <p>Shankar, Raipur, Chhattisgarh</p>
          </div>

          <div className="info_card">
            <FaBriefcase className="info_icon" />
            <h3>Business Type</h3>
            <p>Travel Agency & Tour Operator</p>
          </div>

          <div className="info_card">
            <FaStar className="info_icon" />
            <h3>Customer Rating</h3>
            <p>4.8+ / 5</p>
          </div>
        </section>

        {/* Services / Highlights */}
       
<section className="about_services">
  <h2>What We Do</h2>
  <div className="services_grid">
    <div className="service_item">
      <FaPlane className="service_icon" />
      Train & Flight Ticket Booking
    </div>
    <div className="service_item">
      <FaUsers className="service_icon" />
      Family & Group Tours
    </div>
    <div className="service_item">
      <FaMapSigns className="service_icon" />
      Tour Packages
    </div>
    <div className="service_item">
      <FaHotel className="service_icon" />
      Hotel & Transport Help
    </div>
    <div className="service_item">
      <FaRoute className="service_icon" />
      Customized Planning
    </div>
  </div>
</section>

        {/* Why Choose Us */}
        <section className="about_why">
          <h2>Why Choose Us</h2>
          <p>
            At  Holidays Planner, we focus on customer satisfaction and tailor travel plans
            that match your needs and budget. We guide you at every step so your
            journey is smooth and stress-free.
          </p>
        </section>

      </div>
    </>
  );
}

export default About;