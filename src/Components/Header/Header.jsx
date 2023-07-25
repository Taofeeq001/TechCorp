import React, {useState} from "react";
import './Header.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { FiX } from "react-icons/fi";


const Header = ()=>{
    const [toggle, setToggle] = useState(false)
    return(
        <nav className="landing-nav">
            <div className="destop-nav">
                <h1>TechCorp</h1>
                <div className="menu">
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Latest Gadgets</a>
                    <a href="#">Our Service</a>
                    <div className="nav-log">
                        <button><a style={{color:'white', fontWeight:'bold'}} href="/signin">Login</a></button>
                    </div>
                </div>
                <button onClick={()=> setToggle(!toggle)} className="mobile-toggle">
                    {toggle? <FiX/>:<RxHamburgerMenu/>}
                </button>
            </div>
            <div className={toggle? "mobile-sub":"mobile-menu"}>
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Latest Gadgets</a>
                <a href="#">Our Services</a>
                <a href="#">Login</a>
            </div>
        </nav>
    )
}
export default Header;