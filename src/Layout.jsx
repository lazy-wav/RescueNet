import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ()=>{
    return(
        <div className="mx-auto font-inter flex flex-col justify-center items-center text-black scroll-smooth">
            <Navbar/>
                <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout;