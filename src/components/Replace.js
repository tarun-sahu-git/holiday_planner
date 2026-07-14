import React from 'react'
import './Header.css'
import { Button, Input } from 'antd'
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useRef, useState } from 'react';
function Replace() {
  return (
   <>
     <div className="replace_main_div">
                <h2 className="replace_heading">
                    One Platform That Replaces Multiple Travel Tools
                </h2>
                <p className="replace_subheading">
                    No need to switch between different apps — 195 Holidays does it all
                </p>

                <div className="replace_table">

                    <div className="replace_row header">
                        <div>Traditional Tools</div>
                        <div>Problems</div>
                        <div>195 Holidays Replacement</div>
                    </div>

                    <div className="replace_row">
                        <div>Google Search</div>
                        <div>Too much scattered information</div>
                        <div>Curated destination discovery</div>
                    </div>

                    <div className="replace_row">
                        <div>TripAdvisor</div>
                        <div>Overloaded reviews & ads</div>
                        <div>Clean place highlights</div>
                    </div>

                    <div className="replace_row">
                        <div>MakeMyTrip / Booking Apps</div>
                        <div>Multiple steps & comparisons</div>
                        <div>Unified package browsing</div>
                    </div>

                    <div className="replace_row">
                        <div>Google Maps Planning</div>
                        <div>Manual route & place tracking</div>
                        <div>Visual travel planning cards</div>
                    </div>

                    <div className="replace_row">
                        <div>Notes / Excel Sheets</div>
                        <div>Hard to manage itineraries</div>
                        <div>Smart trip organization</div>
                    </div>

                </div>
            </div>
   </>
  )
}

export default Replace