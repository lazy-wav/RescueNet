import { IoHomeOutline } from "react-icons/io5";
import { LiaLanguageSolid } from "react-icons/lia";
import { IoCallOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Logo = ()=>{
    return(
        <div className=" flex gap-2 justify-center items-center">
            <img className=" w-16 h-16" src="/images/logo.png" alt="logo"/>
            <h1 className=" text-[#028E9E] text-3xl italic font-[800] ">RescueNet</h1>
        </div>
    )
}
const Subnav2 = ()=>{
    return(
        <div className=" w-full p-5 flex items-start justify-between">
            <Logo/>
            <div className="flex gap-5 text-lg text-black px-3 py-1">
                <Link to={"/"} className="flex flex-col gap-2 justify-center text-center items-center">
                    <span><IoHomeOutline size={35} /></span> 
                    <span>Home</span>
                </Link>
                <div className=" cursor-pointer flex flex-col gap-2 justify-center text-center items-center">
                    <span><LiaLanguageSolid size={35} /></span> 
                    <span>Language</span>
                </div>
                <div className=" cursor-pointer flex flex-col gap-2 justify-center text-center items-center">
                    <span><IoCallOutline size={35} /></span> 
                    <span>Contact</span>
                </div>
                <Link to={"/login"} className=" cursor-pointer flex flex-col gap-2 justify-center text-center items-center">
                    <span><FaRegUserCircle size={35} /></span> 
                    <span>Login</span>
                </Link>
            </div>
        </div>
    )
}

export default Subnav2;