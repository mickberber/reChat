import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
            <nav className="navbar navbar-inverse navbar-fixed-bottom">
              <div className="container-fluid">
                <div className="navbar-header">
                  <a className="navbar-brand" href="#"><img style={{height: '35px', width: '65px'}} src='./assets/rechatSm4.png'/></a>
                </div>
              </div>
            </nav>
           );
  }
}
