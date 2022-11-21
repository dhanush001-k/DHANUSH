import React from 'react'
import './Exstyle3.css'
import {Link} from 'react-router-dom'
function Exp3() {
  return (
    <div className='body1'>      
        <br></br>
        <br></br>
        <center>
        <div className='div2'>
        <div className='div1'>
          <br></br>
          <center>
        <img class="im2" src="https://cdn-icons-png.flaticon.com/128/190/190411.png" alt=""/>
        <br></br>
        <br></br>
        <h1 class="h">Your request has been taken.</h1>
        <h1 class="h">We will reach you soon</h1>
        <br></br>
        <img class="im3" src="https://cdn-icons-png.flaticon.com/128/3372/3372699.png" alt=""/>
        <br></br>
        <br></br>
        
        <div class="box1">
            <h2 class="hi">Driver: xxxxxxxx</h2>
            <h2 class="hi">Ph:+91 ********59</h2>
            <h2 class="hi">Amb No:TN 49 P2479</h2>
        </div>
        </center>
        <br></br>
       <center>
        <a><Link to="/Exp2"> <button>BACK</button></Link></a>
     
      </center>
        </div>
        </div>
        </center>
    </div>
  )
} 

export default Exp3
