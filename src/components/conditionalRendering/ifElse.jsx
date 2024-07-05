// USE RCE FOR REACT SNIPPET UPLOAD
import React, { Component } from 'react'

class IfElse extends Component {
  // USE RCONST TO GET CONSTRUTCOR SNIPPET TO UPLOAD
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: false
    }
  }
  
  render() {
    if (this.state.isLoggedIn) {
      return <div>Welcome Dominykas</div>
    } else {
      return <div>Welcome Guest</div>
      }
    }
    // return (
    //   <div>
    //     <div>Welcome Dominykas</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )
  }

export default IfElse
