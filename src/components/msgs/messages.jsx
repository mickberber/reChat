import React, { Component } from 'react';
import Message from './message';

export default function Messages({ convo }) {
  let msgsjsx = convo.map((message, i) => <Message msg={message} key={i} />);
  return (
    <div className='container-fluid'>
      {msgsjsx}
    </div>
  );
}