import React from 'react'
import './Header.css'
import { Button, Input } from 'antd'
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useRef, useState } from 'react';


function Map() {
  return (
   <>
   <div className="map_section">
  <h2 className="map_heading">🌍 Explore Our Destinations</h2>
  <p className="map_subheading">
    Find our top travel destinations around the world.
  </p>

  <div className="map_container">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d315362.78429587355!2d-122.50764096363186!3d37.75767915327221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c0e6b35af%3A0xbda3aab7c6f1e7b0!2sSan%20Francisco%2C%20California%2C%20USA!5e0!3m2!1sen!2sin!4v1706553094989!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Travel Map"
    ></iframe>
  </div>
</div>
   </>
  )
}

export default Map
