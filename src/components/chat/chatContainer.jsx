import React, { Component } from 'react';

export default class ChatContainer extends Component {
  constructor(props) {
    super(props);
    this.sendMessage = props.sendMessage.bind(this);
    this.handleChangeAuthor = props.handleChangeAuthor.bind(this);
    this.handleChangeText = props.handleChangeText.bind(this);
  }

  render() {
    return (
      <form>
        <div className='center'>
          <button onClick={this.sendMessage}>Send Message</button>
          <input onChange={this.handleChangeAuthor} placeholder='Name'></input>
          <input onChange={this.handleChangeText} placeholder='Message'></input>
        </div>
      </form>
    )
  }
}