import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import { Outlet } from "react-router-dom";
import "./Dashboardlayout.css";

const Dashboardlayout = () => {

const [open,setOpen] = useState(false)

return (

<div className="dashboard">

<DashboardHeader setOpen={setOpen} open={open}/>

<Sidebar open={open} setOpen={setOpen}/>

<div className="dashboard_content">

<Outlet/>

</div>

</div>

)

}

export default Dashboardlayout