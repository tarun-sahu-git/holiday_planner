import React, { useState } from "react";
import "./AdminBookings.css";

function AdminBookings() {

const [requests] = useState([
{
bookingId:"TRIP-12345",
name:"Rahul Sharma",
mobile:"9876543210",
email:"rahul@gmail.com",
currentLocation:"Delhi",
destination:"Goa",
travellers:2,
duration:"4 Days",
budget:"20000",
travelDate:"2026-04-10"
},
{
bookingId:"TRIP-56789",
name:"Amit Verma",
mobile:"9123456780",
email:"amit@gmail.com",
currentLocation:"Bhopal",
destination:"Manali",
travellers:3,
duration:"5 Days",
budget:"30000",
travelDate:"2026-05-12"
}
])

const [booking,setBooking] = useState({})

function openRequest(data){

setBooking({
...data,
cost:"",
hotel:"",
transport:"",
departureDate:"",
returnDate:"",
flightTrain:"",
itinerary:"",
status:"Pending"
})

}

function handleChange(e){
setBooking({...booking,[e.target.name]:e.target.value})
}

async function sendToUser(){

try{

await fetch("http://localhost:5000/send-plan",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(booking)
})

alert("Travel plan sent to user")

}catch(err){
console.log(err)
}

}

return(

<div className="admin-dashboard">

{/* LEFT SIDE USER REQUESTS */}

<div className="request-panel">

<h2>User Requests</h2>

{requests.map((item,index)=>(

<div className="request-card" key={index}>

<strong>Booking ID:</strong>
<p>{item.bookingId}</p>

<strong>Customer Name:</strong>
<p>{item.name}</p>

<strong>Mobile Number:</strong>
<p>{item.mobile}</p>

<strong>Email Address:</strong>
<p>{item.email}</p>

<strong>Current Location:</strong>
<p>{item.currentLocation}</p>

<strong>Destination:</strong>
<p>{item.destination}</p>

<strong>Total Travellers:</strong>
<p>{item.travellers}</p>

<strong>Trip Duration:</strong>
<p>{item.duration}</p>

<strong>User Budget:</strong>
<p>₹{item.budget}</p>

<strong>Preferred Travel Date:</strong>
<p>{item.travelDate}</p>

<button onClick={()=>openRequest(item)}>
Open Request
</button>

</div>

))}

</div>


{/* RIGHT SIDE ADMIN FORM */}

<div className="admin-form">

<h2>Create Travel Plan</h2>

<div className="form-row">
<label>Booking ID</label>
<input name="bookingId" value={booking.bookingId || ""} readOnly />
</div>

<div className="form-row">
<label>Customer Name</label>
<input name="name" value={booking.name || ""} readOnly />
</div>

<div className="form-row">
<label>Mobile Number</label>
<input name="mobile" value={booking.mobile || ""} readOnly />
</div>

<div className="form-row">
<label>Email Address</label>
<input name="email" value={booking.email || ""} readOnly />
</div>

<div className="form-row">
<label>Current Location</label>
<input name="currentLocation" value={booking.currentLocation || ""} readOnly />
</div>

<div className="form-row">
<label>Destination</label>
<input name="destination" value={booking.destination || ""} readOnly />
</div>

<div className="form-row">
<label>Total Trip Cost</label>
<input name="cost" placeholder="Enter Total Cost" onChange={handleChange}/>
</div>

<div className="form-row">
<label>Hotel Name</label>
<input name="hotel" placeholder="Hotel Name" onChange={handleChange}/>
</div>

<div className="form-row">
<label>Transport Facility</label>
<input name="transport" placeholder="Taxi / Bus / Car" onChange={handleChange}/>
</div>

<div className="form-row">
<label>Flight / Train Details</label>
<input name="flightTrain" placeholder="Flight / Train Details" onChange={handleChange}/>
</div>

<div className="form-row">
<label>Departure Date</label>
<input type="date" name="departureDate" onChange={handleChange}/>
</div>

<div className="form-row">
<label>Return Date</label>
<input type="date" name="returnDate" onChange={handleChange}/>
</div>

<div className="form-row textarea-row">
<label>Travel Itinerary</label>
<textarea name="itinerary" placeholder="Full Travel Plan" onChange={handleChange}></textarea>
</div>

<button className="send-btn" onClick={sendToUser}>
Send Plan To User
</button>

</div>

</div>

)

}

export default AdminBookings