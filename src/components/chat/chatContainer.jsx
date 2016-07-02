import React, { Component } from 'react';

let text = '';

const handleChange = (e, val) => {
  return e.target.value;
}

export default function ChatContainer({ sendMessage }) {
  const sendAndClear = (e) => {
    e.preventDefault();
    e.target.children[1].value = '';
    sendMessage(text);
    text = '';
  }
  return (
    <form onSubmit={sendAndClear} className='center input-group'>
      <button className='btn btn-primary' >Send Message</button>
      <input className='form-control' onChange={(event) => { text = handleChange(event)} } placeholder='Message'></input>
    </form>
  )
}