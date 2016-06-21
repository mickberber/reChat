import React, { Component } from 'react';

export default function ChatContainer({ handleChangeAuthor, handleChangeText, sendMessage }) {
  return (
    <form>
      <div className='center input-group'>
        <button className='btn btn-primary' onClick={sendMessage}>Send Message</button>
        <input className='form-control' onChange={handleChangeAuthor} placeholder='Name'></input>
        <input className='form-control' onChange={handleChangeText} placeholder='Message'></input>
      </div>
    </form>
  )
}
