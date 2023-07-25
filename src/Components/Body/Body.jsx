import React from "react";
import Hero from "./Hero/Hero";
import Others from "./Others/Others";
import Services from "./Service/Services";
import Testimony from "./Testimony/Testimony";

const Body=()=>{
    return(
        <div>
            <Hero/>
            <Others/>
            <Services/>
            <Testimony/>
        </div>
    )
}
export default Body;