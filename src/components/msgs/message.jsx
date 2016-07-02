import React, { Component } from 'react';
import Moment from 'moment';

export default function Message({ msg: { picture, author, date, text } }) {
  return (
    <div className='row center' style={{padding: 0, margin: 0}}>
      <div className='col-xs-1'><img style={{height: '60px'}} src={picture}/></div>
      <div className='col-xs-2' style={{ marginTop: '20px', fontWeight: 'bold'}}>{author}</div>
      <div className='col-xs-6' style={{ marginTop: '20px'}}>{text}</div>
      <div className='col-xs-2' style={{ marginTop: '20px', float: 'right', fontSize: '10px', fontWeight: 'bold'}}>Sent: {Moment(date).fromNow() }</div>
    </div>
  )
}
