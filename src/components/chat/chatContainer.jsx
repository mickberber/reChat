import React, { Component } from 'react';

let text = '';
let author = '';

const handleChange = (e, val) => {
  return e.target.value;
}

export default function ChatContainer({ sendMessage }) {
  const sendAndClear = (e) => {
    e.preventDefault();
    e.target.children[1].value = '';
    e.target.children[2].value = '';
    sendMessage(author, text);
    text = '';
    author = '';
  }
  return (
    <form onSubmit={sendAndClear} className='center input-group'>
      <button className='btn btn-primary' >Send Message</button>
      <input className='form-control' onChange={(event) => { author = handleChange(event) } } placeholder='Name'></input>
      <input className='form-control' onChange={(event) => { text = handleChange(event)} } placeholder='Message'></input>
    </form>
  )
}