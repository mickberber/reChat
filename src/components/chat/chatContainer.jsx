import React, { Component } from 'react';

export default function ChatContainer({ handleChangeAuthor, handleChangeText, sendMessage }) {
  return (
    <form>
      <div className='center'>
        <button className='btn btn-primary' onClick={sendMessage}>Send Message</button>
        <input onChange={handleChangeAuthor} placeholder='Name'></input>
        <input onChange={handleChangeText} placeholder='Message'></input>
      </div>
    </form>
  )
}
