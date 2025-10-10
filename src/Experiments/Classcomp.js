import React from 'react'
import { Component } from 'react'
//Class components
 class Classcomp extends Component {
  state={ name: "Ravindra"}
  render() {
    return(     
    <div>
        <h2> Class components example</h2>
        <h2> Welcome to : {this.state.name} </h2>    
      </div>
      )
      }   
}
export default Classcomp;