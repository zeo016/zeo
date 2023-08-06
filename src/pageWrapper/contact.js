import React from 'react'
import Fond5 from '../img/fond5.jpg'
 
const Contact = ()=>{
    return(
        <div id='cont5'>
            <div className='imgs5'>
                <img src={Fond5}></img>
            </div>
            <div id='form1s'>
                <div className='fore' id='fore'>
                    <div className='teser'>
                        <h1>|</h1>
                        <h2>Contact Me</h2>                    
                    </div>
                    <form action="https://formsubmit.co/b86502eebe9c461ec355aad6abb3f287" method="POST">
                        <input className='nameser' type='name' placeholder='Your Name' name='name'></input><br />
                        <input className='mailser' type='mail' placeholder='Gmail' name='email'></input>
                        <input className='numberser' placeholder='Number' name='number'></input><br />
                        <textarea className='textser' placeholder='Message' name='message'></textarea>
                        <input className='submitser' type='submit' value='Submit'></input>
                        <input type='hidden' name='_next' value></input>

                        <input type="hidden" name="_next" value="http://localhost:3000"></input>
                        <input type="hidden" name="_captcha" value="false"></input>
                    </form>
                    
                </div>
                <div className='box2' id='box2'>
                    <div>
                        <i class="fa-solid fa-envelope zed"></i>
                        <h1>Gmail</h1>
                        <h2>zeo.01600@gmail.com</h2>
                    </div>
                    <div>
                        <i class="fa-solid fa-phone zed"></i>
                        <h1>phone</h1>
                        <h2>1149490154</h2>
                    </div>
                    <div>
                        <i class="fa-solid fa-mobile zed"></i>
                        <h1>Contact me</h1>
                        <i class="fa-brands fa-twitter zin"></i>
                        <i class="fa-brands fa-instagram zod zin"></i>
                        <i class="fa-brands fa-linkedin zin"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;