import React, { useState } from "react";
import "./TrackBooking.css";

function TrackBooking(){

const [bookingId,setBookingId] = useState("")
const [contact,setContact] = useState("")
const [result,setResult] = useState(null)
const [error,setError] = useState("")

// Demo booking data (baad me backend se aayega)
const demoBookings = [
{
bookingId:"TRIP-48291",
contact:"9876543210",
destination:"Goa",
travellers:3,
duration:"4 Days / 3 Nights",
status:"Pending",
totalCost:"Waiting for admin"
},
{
bookingId:"TRIP-21540",
contact:"tarun@email.com",
destination:"Dubai",
travellers:2,
duration:"5 Days / 4 Nights",
status:"Confirmed",
totalCost:"₹1,20,000"
}
]

function handleSearch(e){
e.preventDefault()

const found = demoBookings.find(
b => b.bookingId === bookingId && b.contact === contact
)

if(found){
setResult(found)
setError("")
}else{
setResult(null)
setError("Booking not found. Please check details.")
}

}

return(

<div className="track-page1">

<div className="track-card1">

<h2>Track Your Booking</h2>

<form onSubmit={handleSearch} className="track-form1">

<div className="input-group1">
<label>Booking ID</label>
<input
type="text"
placeholder="Enter Booking ID"
value={bookingId}
onChange={(e)=>setBookingId(e.target.value)}
required
/>
</div>

<div className="input-group1">
<label>Email / Phone</label>
<input
type="text"
placeholder="Enter Email or Phone"
value={contact}
onChange={(e)=>setContact(e.target.value)}
required
/>
</div>

<button className="track-btn1">
Check Status
</button>

</form>

{error && <p className="error">{error}</p>}

{result && (

<div className="result-box1">

<h3>Booking Details</h3>

<div className="detail-row1">
<span>Booking ID</span>
<strong>{result.bookingId}</strong>
</div>

<div className="detail-row1">
<span>Destination</span>
<strong>{result.destination}</strong>
</div>

<div className="detail-row1">
<span>Travellers</span>
<strong>{result.travellers}</strong>
</div>

<div className="detail-row1">
<span>Duration</span>
<strong>{result.duration}</strong>
</div>

<div className="detail-row1">
<span>Status</span>
<strong className="status">{result.status}</strong>
</div>

<div className="detail-row1">
<span>Total Cost</span>
<strong>{result.totalCost}</strong>
</div>

</div>

)}

</div>

</div>

)

}

export default TrackBooking