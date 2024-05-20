import { Link, useLocation } from "react-router-dom";
import Subnav from "./Subnav";
import Subnav2 from "./Subnav2";
const Links=[
    {
        title:"Emergency Alert",
        to:"/emergency-alert",
    },
    {
        title:"Weather Alert",
        to:"/weather-alert",
    },
    {
        title:"Safety Information",
        to:"/safety-information",
    },
    {
        title:"Volunteer Registration",
        to:"/volunteer-registration",
    },
    {
        title:"Response ‎ ",
        to:"/response",
    },
    {
        title:"Resources ‎ ",
        to:"/resources",
    },
    {
        title:"Donate/ Contribute",
        to:"/donate-contribute",
    },
    {
        title:"Report Incident",
        to:"/report-incident",
    },
    {
        title:"Emergency Contacts",
        to:"/emergency-contacts",
    },
    {
        title:"Find nearby Agencies",
        to:"/find-nearby-agencies",
    },
]
const Navbar = () =>{
    const location = useLocation();
    console.log(location.pathname)
    return(
        <div className=" w-full">
        {location.pathname==="/"?<Subnav/>:<Subnav2/>}
        <div className="w-full flex items-center px-2 text-textPrim justify-start bg-indigo-950 font-medium font-['Inter']">
        {Links.map((item,index)=>{
            return(
                <Link to={item.to} className="px-3 py-4" style={index===Links.length-1?{}:{borderRight:"1px white solid"}}>{item.title} </Link>
            )
        })}
        </div>
        </div>
    )
}

export default Navbar;