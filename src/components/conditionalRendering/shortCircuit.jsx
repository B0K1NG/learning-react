import React, { Component } from 'react'
class ShortCircuit extends Component {
// USE RCONST TO GET CONSTRUTCOR SNIPPET TO UPLOAD
  state = {
    isLoggedIn: true,
    username: 'Dominykas'
  }

  toggleLogin = () => {
    this.setState(prevState => ({
      isLoggedIn: !prevState.isLoggedIn
    }))
  }
  
  render() {
    return (
      <div>
        {this.state.isLoggedIn ? (
          <div>Welcome {this.state.username}</div>
        ) : (
          <div>Welcome Guest</div>
        )}
        <button onClick={this.toggleLogin}>
          {this.state.isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </div>
    );
  }
}
export default ShortCircuit
