import React from 'react'
import Adsd from '../img/asd.png'
import Fond4s from '../img/fond4s.jpg'


const Projects = ()=>{
    return(
        <div id='projects4'>
            <div className='imgpres'>
                <img src={Fond4s}></img>
            </div>
            <div className='text4p' id='text4p'>
                <div className='text4pt'>
                    <h1 id='reony'>|</h1>
                    <h2>Projects</h2>
                </div>
                <h3>From Zeo</h3>
            </div>
            <div className='imgs4' id='imgs4'>
                <img src={Adsd}></img>
                <img src={Adsd}></img>
                <img src={Adsd}></img>
                <img src={Adsd}></img>
                <img src={Adsd}></img>
                <img src={Adsd}></img>
            </div>

        </div>
    )
}
export default Projects