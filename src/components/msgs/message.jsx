import React, { Component } from 'react';
import Moment from 'moment';

export default class Message extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (<div className='row center'>
              <div className='col-xs-2'>{this.props.msg.author}</div>
              <div className='col-xs-3'>{Moment(this.props.msg.date).format('MMMM Do YYYY, h:mm:ss a')}</div>
              <div className='col-xs-7'>{this.props.msg.text}</div>
            </div>);
  }
}
