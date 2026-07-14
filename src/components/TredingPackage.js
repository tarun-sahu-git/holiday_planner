import React from 'react'
import './Header.css'
import { Button, Input } from 'antd'
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useRef, useState } from 'react';

function TredingPackage() {
  return (
  <>
     <div className="trending_main_div">
                <h2 className="trending_heading">🔥 Trending Holiday Packages</h2>

                <div className="trending_slider_wrapper">
                   
                        <button className="slider_btn left" >
                            <ArrowLeftOutlined />
                        </button>
                   

                    <div className="trending_slider">
                        {/* Card 1 */}
                        <div className="trending_card">
                            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" />
                            <h3>Maldives Getaway</h3>
                            <p>4N / 5D</p>
                            <span>₹49,999</span>
                        </div>

                        {/* Card 2 */}
                        <div className="trending_card">
                            <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad" />
                            <h3>Paris Tour</h3>
                            <p>5N / 6D</p>
                            <span>₹89,999</span>
                        </div>

                        {/* Card 3 */}
                        <div className="trending_card">
                            <img src="https://images.unsplash.com/photo-1548013146-72479768bada" />
                            <h3>Manali Adventure</h3>
                            <p>3N / 4D</p>
                            <span>₹19,999</span>
                        </div>

                        {/* Card 4 */}
                        <div className="trending_card">
                            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" />
                            <h3>Bali Escape</h3>
                            <p>5N / 6D</p>
                            <span>₹59,999</span>
                        </div>
                        {/* Card 1 */}
                        <div className="trending_card">
                            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" />
                            <h3>Maldives Getaway</h3>
                            <p>4N / 5D</p>
                            <span>₹49,999</span>
                        </div>

                        {/* Card 2 */}
                        <div className="trending_card">
                            <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad" />
                            <h3>Paris Tour</h3>
                            <p>5N / 6D</p>
                            <span>₹89,999</span>
                        </div>

                        {/* Card 3 */}
                        <div className="trending_card">
                            <img src="https://images.unsplash.com/photo-1548013146-72479768bada" />
                            <h3>Manali Adventure</h3>
                            <p>3N / 4D</p>
                            <span>₹19,999</span>
                        </div>

                        {/* Card 4 */}
                        <div className="trending_card">
                            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" />
                            <h3>Bali Escape</h3>
                            <p>5N / 6D</p>
                            <span>₹59,999</span>
                        </div>
                    </div>

                    <button className="slider_btn right">
                        <ArrowRightOutlined />
                    </button>
                </div>
            </div>
  </>
  )
}

export default TredingPackage