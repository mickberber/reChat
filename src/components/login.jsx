import React, { Component } from 'react';
import Router, { Link } from 'react-router';
import FacebookLogin from 'react-facebook-login';

export default class Login extends Component {
  responseFacebook(response) {
    window.cheating = response;
    console.log(response);
  }
  render() {
    return (<Link to='/app'>
              <FacebookLogin
              appId='537663683084269'
              autoLoad={true}
              fields="name,email,picture"
              callback={this.responseFacebook} 
              />
            </Link>);
  }

}
