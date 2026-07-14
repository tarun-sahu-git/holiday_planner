import React from 'react'
import './Header.css'
import { Button, Input } from 'antd'
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useRef, useState } from 'react';

function SocialProof() {
    return (
        <>
            <div className="social_proof_main">
                <h2 className="social_proof_heading">📸 Our Travelers' Moments</h2>
                <p className="social_proof_subheading">See real experiences from our travelers around the world!</p>

                <div className="social_feed">
                    <div className="social_card">
                        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="Travel 1" />
                    </div>
                    <div className="social_card">
                        <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad" alt="Travel 2" />
                    </div>
                    <div className="social_card">
                        <img src="https://images.unsplash.com/photo-1548013146-72479768bada" alt="Travel 3" />
                    </div>
                    <div className="social_card">
                        <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" alt="Travel 4" />
                    </div>
                    <div className="social_card">
                        <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad" alt="Travel 5" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SocialProof