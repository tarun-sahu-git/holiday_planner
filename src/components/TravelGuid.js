import React from 'react'
import './Header.css'
import { Button, Input } from 'antd'
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useRef, useState } from 'react';

function TravelGuid() {
  return (
    <>
     <div className="travel_guide_main_div">
                <h2 className="travel_guide_heading">🌍 Travel Guides & Tips</h2>

                <div className="travel_guide_container">
                    {/* Guide 1 */}
                    <div className="travel_guide_card">
                        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="Maldives Guide" className="travel_guide_image" />
                        <h4>Maldives Travel Guide</h4>
                        <p>Discover the best resorts, beaches, and activities for an unforgettable Maldives trip.</p>
                        <button className="travel_guide_btn">Read More</button>
                    </div>

                    {/* Guide 2 */}
                    <div className="travel_guide_card">
                        <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad" alt="Paris Guide" className="travel_guide_image" />
                        <h4>Paris City Guide</h4>
                        <p>Explore iconic landmarks, local cuisine, and hidden gems in the City of Lights.</p>
                        <button className="travel_guide_btn">Read More</button>
                    </div>

                    {/* Guide 3 */}
                    <div className="travel_guide_card">
                        <img src="https://images.unsplash.com/photo-1548013146-72479768bada" alt="Tokyo Guide" className="travel_guide_image" />
                        <h4>Tokyo Adventure Guide</h4>
                        <p>From Shibuya crossing to temples, experience Tokyo like a local.</p>
                        <button className="travel_guide_btn">Read More</button>
                    </div>

                    {/* Guide 4 */}
                    <div className="travel_guide_card">
                        <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" alt="Bali Guide" className="travel_guide_image" />
                        <h4>Bali Escape Tips</h4>
                        <p>Plan your Bali getaway with beaches, cultural spots, and adventure activities.</p>
                        <button className="travel_guide_btn">Read More</button>
                    </div>
                </div>
            </div>
          
    </>
  )
}

export default TravelGuid