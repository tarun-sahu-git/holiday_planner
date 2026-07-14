import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BookingConfirmation.css";

function BookingConfirmation() {

const navigate = useNavigate()
const location = useLocation()

const booking = location.state || {
bookingId:"TRIP-"+Math.floor(Math.random()*100000),
destination:"Not Selected",
travellers:1,
duration:"0 Days",
status:"Pending"
}

return (

<div className="confirm-page">

<div className="confirm-card">

<h1 className="success-icon">✔</h1>

<h2>Trip Request Submitted</h2>

<p className="subtitle">
Your travel request has been received. Our team will review your trip and update pricing soon.
</p>

<div className="booking-details">

<div className="detail-row">
<span>Booking ID</span>
<strong>{booking.bookingId}</strong>
</div>

<div className="detail-row">
<span>Destination</span>
<strong>{booking.destination}</strong>
</div>

<div className="detail-row">
<span>Total Travellers</span>
<strong>{booking.travellers}</strong>
</div>

<div className="detail-row">
<span>Trip Duration</span>
<strong>{booking.duration}</strong>
</div>

<div className="detail-row">
<span>Status</span>
<strong className="pending">{booking.status}</strong>
</div>

</div>

<div className="info-box">
Please save your <b>Booking ID</b> to track your trip request.
</div>

<div className="btn-group">

<button
className="track-btn"
onClick={()=>navigate("/track-booking")}
>
Track Booking
</button>

<button
className="home-btn"
onClick={()=>navigate("/")}
>
Go Home
</button>

</div>

</div>

</div>

)

}

export default BookingConfirmation