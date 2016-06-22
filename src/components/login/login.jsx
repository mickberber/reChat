import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return( <button onClick={this.props.loginAttempt} style={{visibility: this.props.isHidden}}> The button </button>)
    }
} 