// USE RCE FOR REACT SNIPPET UPLOAD
import React, { Component } from 'react'

class ElementVariables extends Component {
  // USE RCONST TO GET CONSTRUTCOR SNIPPET TO UPLOAD
  constructor(props) {
    super(props)
  
    this.state = {
      isLoggedIn: false
    }
  }
  
  render() {
    let message
    if (this.state.isLoggedIn) {
      message = <>Welcome Dominykas</>
    } else {
      message = <>Welcome Guest</>
    }

    return <div>{message}</div>
    // return (
    //   <div>
    //     <div>Welcome Dominykas</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default ElementVariables
