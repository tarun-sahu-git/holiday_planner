import React from 'react'
import './Services.css'

function Services() {
  
  return (
     <>
      <div className="service_main_div">
        <h2 className="service_heading">Our Services</h2>
        <p className="service_subheading">
          We provide complete travel solutions for solo, friends & group trips
        </p>

        <div className="service_card_container">

          <div className="service_card">
            <img src="https://cdn-icons-png.flaticon.com/512/201/201623.png" />
            <h3>Travel Guide</h3>
            <p>Professional travel guides for safe and memorable journeys.</p>
          </div>

          <div className="service_card">
            <img src="https://cdn-icons-png.flaticon.com/512/139/139899.png" />
            <h3>Best Hotels</h3>
            <p>Affordable and luxury hotel booking at top destinations.</p>
          </div>

          <div className="service_card">
            <img src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png" />
            <h3>Restaurants</h3>
            <p>Discover the best local restaurants and food experiences.</p>
          </div>

          <div className="service_card">
            <img src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png" />
            <h3>Weather Info</h3>
            <p>Live weather updates to plan your trip perfectly.</p>
          </div>

          <div className="service_card">
            <img src="https://cdn-icons-png.flaticon.com/512/854/854878.png" />
            <h3>Trip Planning</h3>
            <p>Customized trip plans based on your budget & interests.</p>
          </div>

          <div className="service_card">
            <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" />
            <h3>Maps & Routes</h3>
            <p>Easy navigation with maps and travel routes.</p>
          </div>

          <div className="service_card">
            <img src="https://cdn-icons-png.flaticon.com/512/1048/1048313.png" />
            <h3>Transport</h3>
            <p>Bus, train & flight booking services.</p>
          </div>

          <div className="service_card">
            <img src="https://cdn-icons-png.flaticon.com/512/861/861060.png" />
            <h3>Adventure Trips</h3>
            <p>Adventure destinations for thrill lovers.</p>
          </div>

          <div className="service_card">
            <img src="https://cdn-icons-png.flaticon.com/512/747/747376.png" />
            <h3>Group Trips</h3>
            <p>Public, friends & corporate group tour packages.</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default Services