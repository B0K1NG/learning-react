import React, { Component } from 'react';

class Message extends Component {
    constructor() {
        super();
        this.state = {
            message: 'Welcome visitor'
        };
        this.changeMessage = this.changeMessage.bind(this);
    }

    changeMessage() {
        this.setState({
            message: 'Thank you for subscribing'
        });
    }

    render() {
        return (
            <div>       
                <h1>
                    {this.state.message}
                    <button onClick={this.changeMessage}>Subscribe</button>
                </h1>
            </div>
        );
    }
}

export default Message;

