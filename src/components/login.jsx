import React, { Component } from 'react';
import Router, { Link, browserHistory } from 'react-router';

export default class Login extends Component {

  render() {
    return (<Link to='/app'><button> login </button></Link>);
  }

}
