import React, { useEffect, useState } from "react";
import "./UserTravelPlan.css";

function UserTravelPlan() {

const [plan,setPlan] = useState(null)

useEffect(()=>{

fetch("http://localhost:5000/get-plan")
.then(res=>res.json())
.then(data=>setPlan(data))
.catch(err=>console.log(err))

},[])


if(!plan){

return <div className="loading">Loading Travel Plan...</div>

}

return(

<div className="plan-container">

<h1>Your Travel Plan</h1>

<div className="plan-card">

<div className="plan-row">
<strong>Booking ID:</strong>
<span>{plan.bookingId}</span>
</div>

<div className="plan-row">
<strong>Customer Name:</strong>
<span>{plan.name}</span>
</div>

<div className="plan-row">
<strong>Mobile Number:</strong>
<span>{plan.mobile}</span>
</div>

<div className="plan-row">
<strong>Email:</strong>
<span>{plan.email}</span>
</div>

<div className="plan-row">
<strong>Destination:</strong>
<span>{plan.destination}</span>
</div>

<div className="plan-row">
<strong>Total Trip Cost:</strong>
<span>₹{plan.cost}</span>
</div>

<div className="plan-row">
<strong>Hotel Name:</strong>
<span>{plan.hotel}</span>
</div>

<div className="plan-row">
<strong>Transport:</strong>
<span>{plan.transport}</span>
</div>

<div className="plan-row">
<strong>Departure Date:</strong>
<span>{plan.departureDate}</span>
</div>

<div className="plan-row">
<strong>Return Date:</strong>
<span>{plan.returnDate}</span>
</div>

<div className="plan-row">
<strong>Flight / Train:</strong>
<span>{plan.flightTrain}</span>
</div>

<div className="plan-itinerary">

<h3>Travel Itinerary</h3>

<p>{plan.itinerary}</p>

</div>

<div className="plan-buttons">

<button className="accept-btn">
Accept Plan
</button>

<button className="change-btn">
Request Change
</button>

</div>

</div>

</div>

)

}

export default UserTravelPlan