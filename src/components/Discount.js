import React from 'react'
import './Header.css'
import { Button, Input } from 'antd'
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useRef, useState } from 'react';


function Discount() {
  return (
   <>
   <div className="offers_main">
  <h2 className="offers_heading">💰 Hot Travel Deals & Discounts</h2>
  <p className="offers_subheading">Grab these amazing offers and make your dream vacation affordable!</p>

  <div className="offers_slider_wrapper">

    {/* Slider */}
    <div className="offers_slider">
      {/* Offer Card 1 */}
      <div className="offer_card">
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="Maldives Deal" />
        <h4>Maldives Getaway</h4>
        <p>4N / 5D</p>
        <span className='discount_price'>₹49,999 <span className="original_price">₹59,999</span></span>
        <button className="explore_btn">Explore Now</button>
      </div>

      {/* Offer Card 2 */}
      <div className="offer_card">
        <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad" alt="Paris Deal" />
        <h4>Paris Tour</h4>
        <p>5N / 6D</p>
        <span className='discount_price'>₹79,999 <span className="original_price">₹89,999</span></span>
        <button className="explore_btn">Explore Now</button>
      </div>

      {/* Offer Card 3 */}
      <div className="offer_card">
        <img src="https://images.unsplash.com/photo-1548013146-72479768bada" alt="Manali Deal" />
        <h4>Manali Adventure</h4>
        <p>3N / 4D</p>
        <span className='discount_price'>₹17,999 <span className="original_price">₹19,999</span></span>
        <button className="explore_btn">Explore Now</button>
      </div>

      {/* Offer Card 4 */}
      <div className="offer_card">
        <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" alt="Bali Deal" />
        <h4>Bali Escape</h4>
        <p>5N / 6D</p>
        <span className='discount_price'>₹49,999 <span className="original_price">₹59,999</span></span>
        <button className="explore_btn">Explore Now</button>
      </div>
    </div>
  </div>
</div>

   </>
  )
}

export default Discount