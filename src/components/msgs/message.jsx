import React, { Component } from 'react';
import Moment from 'moment';

export default function Message({ msg: { author, date, text } }) {
  return (
    <div className='row center'>
      <div className='col-xs-2'>{author}</div>
      <div className='col-xs-3'>{Moment(date).format('MMMM Do YYYY, h:mm:ss a') }</div>
      <div className='col-xs-7'>{text}
        <div
          className="fbLike"
          data-share="true"
          data-width="450"
          data-show-faces="true">
        </div>
      </div>
    </div>
  )
}
