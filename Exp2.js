import React from 'react'
import './Exstyle2.css'
import {Link} from 'react-router-dom'
function Exp2() {
  return (
    <div class="box">
      <body> </body>
      <br></br>
      <br></br>
      <div className='div2'>
      <div className='div1'>
        <center>
        <br></br>
        <h1 className="h1">108 Emergency</h1>
        <br></br>
        <br></br>
        <br></br>
        <img class="img2" src="https://cdn-icons-png.flaticon.com/128/1032/1032989.png" alt=""/>
        <br></br> 
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <a><Link to="/Exp3">
          <button className="img3"></button>
        </Link>
        </a>
        <h2 className="h2">Book now</h2>
        </center>
        <br></br>
       <center>
      <button>BACK</button>
      </center>
        </div>
        </div>
    </div>
  )
} 

export default Exp2