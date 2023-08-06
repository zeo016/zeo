import React from "react";
import Jsdr from "../img/js.png";
import Cssdr from "../img/css.png";
import Sassdr from "../img/sass.png";
import Reactdr from "../img/react.png";
import Htmldr from "../img/html.png";
import Githubdr from "../img/github.png";

const Skills = ()=>{
    return(
        <div id="part3">
            <div className="imgpart" >
                <img src="../fond3.jpg"></img>
            </div>
            <div className="text31" id="text31">
                <h1 id="redo">|</h1>
                <h2>Skills</h2>
            </div>
            <div className="blocks3">
                <div className="logs3" id="logs3">
                    <div>
                        <img src={Htmldr}></img>
                        <img src={Cssdr}></img>
                        <img src={Jsdr}></img>
                    </div>
                    <div className="part2i">
                        <img src={Reactdr}></img>
                        <img src={Githubdr}></img>
                        <img src={Sassdr}></img>
                    </div>
                </div>
                <div className="rell3" id="relle3">
                    <div class="progress">
                        <div class="progress-bar ber1">
                            <span class="progress-bar-text">Html 80%</span>
                        </div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar ber2">
                            <span class="progress-bar-text">Css 70%</span>
                        </div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar ber3">
                            <span class="progress-bar-text">Javascript 50%</span>
                        </div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar ber4">
                            <span class="progress-bar-text">React 40%</span>
                        </div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar ber5">
                            <span class="progress-bar-text">Github 60%</span>
                        </div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar ber6">
                            <span class="progress-bar-text">Sass 50%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;