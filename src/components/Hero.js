import React from 'react'
import './Header.css'
import { Carousel } from "antd";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";
import hero5 from "../assets/hero5.jpg";
import {NavLink} from 'react-router-dom'

const images = [hero1, hero2, hero3, hero4, hero5];

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <Carousel
        autoplay
        autoplaySpeed={2000}
        effect="fade"
        dots
      >

        {images.map((img, index) => (
          <div key={index}>
            <div
              className="hero-slide"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="overlay"></div>

              <div className="hero-text">
                <h1>
                  Discover Your <span>Dream Trip</span>
                </h1>
                <p>
                  Explore top destinations with best deals and luxury
                  experiences.
                </p>
              <NavLink to='/planingform'> <button>Start Planning</button> </NavLink> 
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};
export default Hero