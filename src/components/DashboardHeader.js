import React from "react";
import "./DashboardHeader.css";

const DashboardHeader = ({setOpen,open}) => {

return (

<div className="dashboardheader">

<div className="menu_icon" onClick={()=>setOpen(!open)}>
☰
Dashboard
</div>



<div className="admin">
Welcome Admin
</div>

</div>

)

}

export default DashboardHeader