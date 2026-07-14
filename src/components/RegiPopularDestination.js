import React, { useState, useEffect, useRef } from "react";
import { Form, Button, Input, Card, Row, Col } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./RegiPopularDestination.css";

function RegiPopularDestination() {

const [form] = Form.useForm();
const [data, setData] = useState([]);
const [userid, setUserId] = useState(null);
const scrollRef = useRef(null);

useEffect(()=>{
getdata();
},[])

function getdata(){

fetch("https://jsonplaceholder.typicode.com/photos?_limit=12")
.then(res=>res.json())
.then(res=>{

const newData = res.map(i=>({
id:i.id,
place:i.title.substring(0,15),
description:"Beautiful Tourist Destination",
image:i.url
}))

setData(newData)

})

}

function postData(values){

if(userid){

const updated = data.map(i =>
i.id === userid ? {...i,...values} : i
)

setData(updated)
setUserId(null)

}else{

const newItem = {
id:Date.now(),
...values
}

setData([newItem,...data])

}

form.resetFields()

}

function deleteData(id){

const filtered = data.filter(i=>i.id !== id)
setData(filtered)

}

function editData(item){

setUserId(item.id)
form.setFieldsValue(item)

}

function searchdata(value){

const filtered = data.filter(i =>
i.place.toLowerCase().includes(value.toLowerCase())
)

setData(filtered)

}

function scrollLeft(){

scrollRef.current.scrollBy({
left:-350,
behavior:"smooth"
})

}

function scrollRight(){

scrollRef.current.scrollBy({
left:350,
behavior:"smooth"
})

}

return(

<div className="admin_container">

<Row gutter={[24,24]}>

{/* LEFT FORM */}

<Col xs={24} md={8}>

<Card
title={userid ? "Update Destination" : "Add Destination"}
className="form_card"
>

<Form
form={form}
layout="vertical"
onFinish={postData}
>

<Form.Item
label="Place"
name="place"
rules={[{required:true,message:"Enter place"}]}
>
<Input placeholder="Enter place name"/>
</Form.Item>

<Form.Item
label="Description"
name="description"
rules={[{required:true,message:"Enter description"}]}
>
<Input.TextArea rows={3}/>
</Form.Item>

<Form.Item
label="Image URL"
name="image"
rules={[{required:true,message:"Enter image url"}]}
>
<Input placeholder="Paste image url"/>
</Form.Item>

<Button
type="primary"
block
size="large"
htmlType="submit"
>
{userid ? "Update Destination" : "Add Destination"}
</Button>

</Form>

</Card>

</Col>

{/* RIGHT DATA */}

<Col xs={24} md={16}>

<Card className="data_card">

<Input
placeholder="Search destination..."
size="large"
className="search_input"
onChange={(e)=>searchdata(e.target.value)}
/>

<div className="slider_container">

<button className="scroll_btn left" onClick={scrollLeft}>
<LeftOutlined />
</button>

<div className="destination_grid" ref={scrollRef}>

{
data.map(i=>(

<Card
key={i.id}
hoverable
cover={<img src={i.image} alt=""/>}
className="destination_card"
>

<h4>{i.place}</h4>

<p>{i.description}</p>

<div className="btn_group">

<Button
type="primary"
size="small"
onClick={()=>editData(i)}
>
Edit
</Button>

<Button
danger
size="small"
onClick={()=>deleteData(i.id)}
>
Delete
</Button>

</div>

</Card>

))
}

</div>

<button className="scroll_btn right" onClick={scrollRight}>
<RightOutlined />
</button>

</div>

</Card>

</Col>

</Row>

</div>

)

}

export default RegiPopularDestination