import React from "react";
import '../sass/navbar.css';
import Fade from 'react-reveal/Fade';

class Navbar extends React.Component{
    render(){
        return(
            <div id="navfull" >
                    <div className="navleft">
                        <div className="nav1">
                            <Fade left>
                            <h3>Hi, I'm</h3>
                            <h1>Zeo</h1>
                            <h2>Luis Gabriel</h2>
                            </Fade>
                        </div>
                        <div className="nav2">
                            <Fade left>
                            <ul>
                                <a href="#imag1"><li>About</li></a>
                                <a href="#servicespart"><li>Services</li></a>
                                <a href="#projects4"><li>Projects</li></a>
                                <a href="#part3"><li>Skills</li></a>
                                <a href="#cont5"><li>Contact</li></a>
                            </ul>
                            </Fade>
                        </div>
                        <div className="reds">
                            <div>
                            <a href="https://twitter.com/_zeo016" >
                                <i className="fa-brands fa-twitter itwitter" ></i>
                            </a>
                            </div>
                            <div>
                            <a href="https://www.instagram.com/zeo016/">
                                <i className="fa-brands fa-instagram iinstagram" href=""></i>
                            </a>
                            </div>
                            <div>
                            <a href="https://www.linkedin.com/in/zeo-callan-2652a9248">
                                <i className="fa-brands fa-linkedin lik"></i>
                            </a>
                            </div> 
                        </div>
                    </div>
                    <div className="navright">
                        <img src="./fond.jpg"></img>
                        <div className="navcont">
                            <Fade top>
                            <h3>Hello,</h3>
                            <h1>I'm Luis Gabriel</h1>
                            <h2 className="typo2">A Developer Web</h2>
                            <a href="#cont5"><button>Contact me</button></a>
                            </Fade>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Navbar