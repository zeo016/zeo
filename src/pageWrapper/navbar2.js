import React from "react";
import '../sass/navbar.css';
import '../js/scroll'
import Fade from 'react-reveal/Fade';


const navbar2 = ()=>{
    return(
        <div id="aboutcont" className="navg">
            <div className="navbar2" >
                <div className="awea"id="navbar2">
                    <div className="log1">
                        <h1>Zeo</h1>
                        <h2>Developer Web</h2>
                    </div>
                    <div className="nb2">
                        <ul>
                            <a href="#imag1"><li>About</li></a>
                            <a href="#servicespart"><li>Services</li></a>
                            <a href="#projects4"><li>Projects</li></a>
                            <a href="#part3"><li>Skills</li></a>
                            <a href="#cont5"><li>Contact</li></a>
                        </ul>
                    </div>  
                </div>   
            </div>
        </div>
    )
}
export default navbar2