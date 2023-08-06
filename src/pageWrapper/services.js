import React from 'react';
import Fade from 'react-reveal/Fade';
import '../sass/allmore.css';
import config from 'react-reveal/globals';

config({ ssrFadeout: true });

class services extends React.Component {
    render(){
    return(
        <div id='servicespart'>
            <div>
                <img src='./fifi.jpg'></img>               
            </div>
            <div className='serve2' id='serve2'>
                <div className='shat' id='shat'>
                    <h1>|</h1>
                    <h2>Services</h2>
                </div>
                <div className='rege2' id='rege2'>
                    <div id='fart1'>
                        <div id='adse' className='texts1'>
                            <h1>Web Structure</h1>
                            <h3>Lorem Ipsum is simply dummy<br/> text of the printing and<br/> typesetting industry. Lorem Ipsum has<br/> been the industry's standard dummy<br/> text ever since the 1500s,<br/> when an unknown printer took<br/></h3>
                        </div>
                        <div id='adse' className='texts1'>
                            <h1>Web Development</h1>
                            <h3>Lorem Ipsum is simply dummy<br/> text of the printing and<br/> typesetting industry. Lorem Ipsum has<br/> been the industry's standard dummy<br/> text ever since the 1500s,<br/> when an unknown printer took<br/></h3>
                        </div>
                    </div>
                    
                    <div id='fart2'>
                        <div id='adse' className='texts1'>
                            <h1>Web Design</h1>
                            <h3>Lorem Ipsum is simply dummy<br/> text of the printing and<br/> typesetting industry. Lorem Ipsum has<br/> been the industry's standard dummy<br/> text ever since the 1500s,<br/> when an unknown printer took<br/></h3>
                        </div>
                        <div id='adse' className='texts1'>
                            <h1>Responsive Design</h1>
                            <h3>Lorem Ipsum is simply dummy<br/> text of the printing and<br/> typesetting industry. Lorem Ipsum has<br/> been the industry's standard dummy<br/> text ever since the 1500s,<br/> when an unknown printer took<br/></h3>
                        </div>
                    </div>
                    
                    
                </div>
                
            </div>
        </div>
    )
}
}

export default services;