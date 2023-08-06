import React from "react";
import Fade from 'react-reveal/Fade';

const about = ()=>{
    return(
        <div id="aboutme">
            <div className="botmenu" id="botmenu">
                <i class="fa-solid fa-bars"></i>
            </div>
            <div className="imag1" id="imag1">
                <img className="awwe" src="./sedd.jpg"></img>
            </div>
            <div className="about2" id="about2">
                <div className="text1" id="text1">
                    {/* <Fade top> */}
                    <div className="hsde" id="hsde">
                        <h1>|</h1>
                        <h2>About</h2>
                    </div>
                    {/* </Fade> */}
                    {/* <Fade left> */}
                    <h1 className="hs12" id="hs12"> I Am Front End Developer</h1>
                    <h3 className="hs13">Lorem Ipsum is simply dummy text of the printing<br/> and typesetting industry. Lorem Ipsum has been<br/> the industry's standard dummy text ever since<br/> the 1500s, when an unknown printer took a galley</h3>
                    <a href="#cont5"><button className="bot1">Contact Me</button></a>
                    {/* </Fade> */}
                    <div className="redit">
                        <div>
                            <i class="fa-solid fa-phone"></i>
                            <h1>Phone</h1>
                            <h3>1149490154</h3>
                        </div>
                        <div>
                            <i class="fa-solid fa-envelope"></i>
                            <h1>Gmail</h1>
                            <h3>zeo.01600@gmail.com</h3>
                        </div>
                    </div>
                </div>
                <div className="imag2">
                    <img src="./compu.png"></img>
                </div>
            </div>
            
        </div>
    )
}

export default about;