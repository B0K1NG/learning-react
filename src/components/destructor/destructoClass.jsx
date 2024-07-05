                                                                        // 1.1 Destructuring In the body code example
import React, { Component } from 'react'

class GreetClass extends Component {
    render() {
        const { name, heroName } = this.props
        // const {state1, state2} = this.state - when using state
        return (
            <>
                <h1>
                    Hello {name} a.k.a {heroName}
                </h1>
            </>
        )
    }
}

export default GreetClass