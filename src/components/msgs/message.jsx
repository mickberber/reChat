import React, { Component } from 'react';
import Moment from 'moment';

export default function Message({ msg: { picture, author, date, text } }) {
  return (
    <div className='row center'>
      <div className='col-xs-2'><img src={picture}/></div>
      <div className='col-xs-2'>{author}</div>
      <div className='col-xs-3'>{Moment(date).format('MMMM Do YYYY, h:mm:ss a') }</div>
      <div className='col-xs-5'>{text}</div>
    </div>
  )
}
