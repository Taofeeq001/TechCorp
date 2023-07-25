import React from "react";
import './Footer.css'
import logo from '../Images/one.jpg'


const Footer =()=>{
    return(
        <div className="footer">
            <h1>TechCorp</h1>
            <div className="footer-down">
                <div>
                    <h3><u>MORE ABOUT MY COMPANY</u></h3>
                    <div className="footer-list">
                        <a href="">About us</a>
                        <a href="">Our Authors</a>
                        <a href="">Cntact Us</a>
                        <a href="">Advertise with us</a>
                        <a href="">Privacy and Policy</a>
                    </div>
                </div>
                <div>
                    <h3><u>Social Media</u></h3>
                    <div className="footer-list">
                        <a href="">Facebook</a>
                        <a href="">Thread</a>
                        <a href="">Instagram</a>
                        <a href="">Twitter</a>
                        <a href="">Telegram</a>
                        <a href="">Whatsapp</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;