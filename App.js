import React, { Component } from 'react'
import ValidatingForm from './ValidatingForm'; 
function App() {
    return (
      <div>          
        <ValidatingForm/> 
      </div>
    )
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
