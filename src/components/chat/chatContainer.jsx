import React, { Component } from 'react';
import Deets from '../user/deets';

let text = '';

const handleChange = (e, val) => {
  return e.target.value;
}

export default function ChatContainer({ sendMessage, user }) {
  const sendAndClear = (e) => {
    e.preventDefault();
    e.target.children[1].value = '';
    sendMessage(text);
    text = '';
  }
  return (
    <div>
      <Deets user={user} />
      <form onSubmit={sendAndClear} className='center input-group'>
        <button className='btn btn-primary' >Send Message</button>
        <input className='form-control' onChange={(event) => { text = handleChange(event)} } placeholder='Message'></input>
      </form>
    </div>
  )
}