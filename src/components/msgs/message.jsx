import React, { Component } from 'react';
import Moment from 'moment';

export default class Message extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (<div className='row'>
              <div className='col-xs-2 center'>{this.props.msg.author}</div>
              <div className='col-xs-3 center'>{Moment(this.props.msg.date).format('MMMM Do YYYY, h:mm:ss a')}</div>
              <div className='col-xs-7 center'>{this.props.msg.text}</div>
            </div>);
  }
}
