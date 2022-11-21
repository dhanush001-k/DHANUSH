
import React, { Component } from 'react'
import {BrowserRouter,Routes,Route,Link } from 'react-router-dom' ;
// import Exp from './Exp'
// import Exp1 from './Exp1'
import Exp2 from './Exp2'
 import Exp3 from './Exp3'
// import Exp4 from './Exp4'


 
function App() {
    return (
      <BrowserRouter>
      <div>
        <Routes>
        <Route path='/' element= {<Exp2/>}></Route>
        {/* <Exp1/> */}
        {/* <Exp/> */}
        <Route path='/Exp2' element= {<Exp2/>}></Route>
        <Route path='/Exp3' element= {<Exp3/>}></Route>
        {/* <Route path='/Exp' element= {<Exp/>}></Route> */}
        {/* <Route path='/Exp1' element= {<Exp1/>}></Route> */}
        {/* <Exp3/> */}
        {/* <Exp4/> */}
        </Routes>
      </div>
       </BrowserRouter>
    );
  }


export default App


 
// import React, { useEffect, useState } from 'react'

// class App extends React.Component {
//   constructor()
//   {
//     super();
//     this.state={
//       show:false
//     }
//   }
//   render() 
//   {
//     return (
//       <div className="App">
//         <h1>Component will Unmount</h1>
//         {this.state.show ? <child/>:null}
//         <button onClick={()=>{this.setState({show: !this.state.show})}}>Toggle Child</button>
//       </div>
//     )
//   }
// }
// class Child extends React.Component
// {
//   componentWillUnmount()
//   {
//     console.warn("Component is hidden")
//   }

//   render()
//   {
//     return(
//       <div className="App">
//       <h2>Child Component</h2>
//       </div>
//     )
//   }
// }

// export default App
