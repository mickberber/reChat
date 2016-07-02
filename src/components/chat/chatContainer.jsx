import React, { Component } from 'react';

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
    <form style={{display: 'inline', marginLeft: '30%'}} onSubmit={sendAndClear}>
      <button className='btn btn-primary' >Send Message</button>
      <input style={{height: '35px', width: '350px'}} onChange={(event) => { text = handleChange(event)} } placeholder='Message'></input>
    </form>
  )
}