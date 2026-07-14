import React, { useState, useEffect } from "react";
import "./TravellerPlanningForm.css";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Select, Checkbox, DatePicker } from "antd";
import dayjs from "dayjs";

function TravellerPlanningForm() {

const [form] = Form.useForm()
const navigate = useNavigate()

const [transport,setTransport]=useState("")
const [hotel,setHotel]=useState(false)
const [food,setFood]=useState(false)

const [location,setLocation]=useState("")
const [destination,setDestination]=useState("")

const [startDate,setStartDate]=useState("")
const [endDate,setEndDate]=useState("")
const [duration,setDuration]=useState("")

const [adults,setAdults]=useState(1)
const [children,setChildren]=useState(0)

const [travellers,setTravellers]=useState([])

const totalTravellers = adults + children

console.log(travellers)

/* Duration */

useEffect(()=>{

if(startDate && endDate){
 const diff = endDate.diff(startDate, "day")  // diff in days

if(diff>0){
setDuration(`${diff} Days / ${diff-1} Nights`)
}else{
setDuration("")
}

}

},[startDate,endDate])


/* Traveller Generate */

useEffect(()=>{

let arr=[]

for(let i=0;i<totalTravellers;i++){

arr.push({
name:"",
age:"",
gender:"",
passport:""
})

}

setTravellers(arr)

},[adults,children])


function handleTravellerChange(index,field,value){

const updated=[...travellers]
updated[index][field]=value
setTravellers(updated)

}


/* Location */

function detectLocation(){

if(navigator.geolocation){

navigator.geolocation.getCurrentPosition((pos)=>{

const loc=`Lat ${pos.coords.latitude} , Lng ${pos.coords.longitude}`

setLocation(loc)

form.setFieldsValue({
location:loc
})

})

}

}


/* Submit */

async function onFinish(values){
    try{

    
  const response= await fetch("http://localhost:4000",
       {
         method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(values)
    }
    )
    const data = await response.json()
    alert(data.message)

if(response.ok){
    navigate("/bookingconfirmation",{
state:{
destination:values.destination,
travellers:totalTravellers,
duration,
status:"Pending",
formData:values
}
})
}
    }
    catch(err){
        console.error("Error submitting form:", err);
    alert("Server error! Please try again.");
   

    }


}

return (

<div className="travel-container">

<div className="travel-card">

<h2>Plan Your Holiday</h2>

<Form
form={form}
layout="vertical"
onFinish={onFinish}
>

<div className="form-grid">

<Form.Item
label="Full Name"
name="fullName"
rules={[{required:true,message:"Enter your name"}]}
>
<Input placeholder="Enter name"/>
</Form.Item>


<Form.Item
label="Email"
name="email"
rules={[{required:true,message:"Enter email"}]}
>
<Input/>
</Form.Item>


<Form.Item
label="Phone"
name="phone"
rules={[{required:true,message:"Enter phone"}]}
>
<Input/>
</Form.Item>


<Form.Item label="Current Location" name="location">

<div className="location-box">

<Input
value={location}
onChange={(e)=>setLocation(e.target.value)}
/>

<Button onClick={detectLocation}>
Use Current
</Button>

</div>

</Form.Item>


<Form.Item
label="Destination"
name="destination"
rules={[{required:true,message:"Enter destination"}]}
>

<Input
value={destination}
onChange={(e)=>setDestination(e.target.value)}
/>

</Form.Item>

{/* date */}

<Form.Item label="Departure Date" name="startDate">

<DatePicker
  style={{width:"100%"}}
  onChange={(date)=>{
    setStartDate(date ? date : null)  // dayjs object ya null
  }}
/>

</Form.Item>


<Form.Item label="Return Date" name="endDate">

<DatePicker
  style={{width:"100%"}}
  onChange={(date)=>{
    setEndDate(date ? date : null)  // dayjs object ya null
  }}
/>

</Form.Item>


<Form.Item label="Trip Duration" >

<Input value={duration} readOnly/>

</Form.Item>


<Form.Item label="Transport Type" name="transport">

<Select
onChange={(v)=>setTransport(v)}
options={[
{value:"flight",label:"Flight"},
{value:"train",label:"Train"}
]}
/>

</Form.Item>


{transport==="flight" && (

<Form.Item label="Flight Class" name="flightClass">

<Select
options={[
{value:"economy",label:"Economy"},
{value:"business",label:"Business"},
{value:"first",label:"First Class"}
]}
/>

</Form.Item>

)}


{transport==="train" && (

<Form.Item label="Train Type" name="trainType">

<Select
options={[
{value:"ac",label:"AC"},
{value:"nonac",label:"Without AC"},
{value:"sliper",label:"Sliper"}
]}
/>

</Form.Item>

)}

</div>


{/* Travellers */}

<div className="traveller-section">

<h3>Travellers</h3>

<div className="traveller-row">

<span>Adults</span>

<div className="counter">

<Button onClick={()=>adults>1 && setAdults(adults-1)}>-</Button>

<span>{adults}</span>

<Button onClick={()=>setAdults(adults+1)}>+</Button>

</div>

</div>


<div className="traveller-row">

<span>Children</span>

<div className="counter">

<Button onClick={()=>children>0 && setChildren(children-1)}>-</Button>

<span>{children}</span>

<Button onClick={()=>setChildren(children+1)}>+</Button>

</div>

</div>

<p className="total">
Total Travellers : {totalTravellers}
</p>

</div>



{/* Traveller Details */}

<div className="traveller-details">

<h3>Traveller Details</h3>

{travellers.map((traveller,index)=>(

<div className="traveller-card" key={index}>

<h4>Traveller {index+1}</h4>

<div className="traveller-grid">
<Form.Item name="name" >
<Input
placeholder="Name"
onChange={(e)=>handleTravellerChange(index,"name",e.target.value)}
/>
</Form.Item>
<Form.Item name="age">
<Input
placeholder="Age"
type="number"
onChange={(e)=>handleTravellerChange(index,"age",e.target.value)}
/>
</Form.Item>

<Select
placeholder="Gender"
style={{width:"100%"}}
value={traveller.gender}
onChange={(v)=>handleTravellerChange(index,"gender",v)}
options={[
{value:"male",label:"Male"},
{value:"female",label:"Female"},
{value:"other",label:"Other"}
]}
/>
<Form.Item name="passport">
<Input
placeholder="Passport / ID"
onChange={(e)=>handleTravellerChange(index,"passport",e.target.value)}
/>
</Form.Item>

</div>

</div>

))}

</div>




{/* Optional */}

<div className="optional">

<h3>Optional Services</h3>

<Form.Item name="hotel" valuePropName="checked">

<Checkbox
checked={hotel}
onChange={()=>setHotel(!hotel)}
>
Hotel Booking
</Checkbox>

</Form.Item>


{hotel && (

<div className="option-box">

<Select
options={[
{value:"3star",label:"3 Star Hotel"},
{value:"4star",label:"4 Star Hotel"},
{value:"5star",label:"5 Star Hotel"}
]}
/>

<Select
options={[
{value:"single",label:"Single Room"},
{value:"double",label:"Double Room"},
{value:"family",label:"Family Room"}
]}
/>

</div>

)}


<Form.Item name="food" valuePropName="checked">

<Checkbox
checked={food}
onChange={()=>setFood(!food)}
>
Food / Restaurant
</Checkbox>

</Form.Item>


{food && (

<div className="option-box">

<Select
options={[
{value:"breakfast",label:"Breakfast"},
{value:"lunch",label:"Breakfast + Lunch"},
{value:"full",label:"Full Meal"}
]}
/>

</div>

)}

</div>


<Button
type="primary"
htmlType="submit"
className="submit-btn"
>
Plan My Trip
</Button>

</Form>

</div>

</div>

)

}

export default TravellerPlanningForm