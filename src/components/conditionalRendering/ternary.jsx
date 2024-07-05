import React, { Component } from 'react'

class Ternary extends Component {
  // USE RCONST TO GET CONSTRUTCOR SNIPPET TO UPLOAD
  constructor(props) {
    super(props)
  
    this.state = {
      isLoggedIn: false
    }
  }
  
  render() {
    return (
      this.state.isLoggedIn ? <div>Welcome Dominykas</div> : <div>Welcome Guest</div>
    )
    // return (
    //   <div>
    //     <div>Welcome Dominykas</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default Ternary
