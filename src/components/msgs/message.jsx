import React, { Component } from 'react';

export default class Message extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (<div className='row'>
              <div className='col-xs-2 center'>{this.props.msg.author}</div>
              <div className='col-xs-2 center'>{this.props.msg.date}</div>
              <div className='col-xs-8 center'>{this.props.msg.text}</div>
            </div>);
  }
}
