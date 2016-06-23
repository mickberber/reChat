import React, { Component } from 'react';
import Messages from './../msgs/messages';

export default class ChatContainer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.sendMessage = props.sendMessage;
    this.handleChangeAuthor = props.handleChangeAuthor;
    this.handleChangeText = props.handleChangeText;
  }

  render() {
    return (
      <div style={{visibility: this.props.isHidden}}>
        <form>
          <div className='center'>
            <div className='btn btn-primary' onClick={this.sendMessage}>Send Message</div>
            <input onChange={this.handleChangeAuthor} placeholder='Name'></input>
            <input onChange={this.handleChangeText} placeholder='Message'></input>
          </div>
        </form>
        <Messages convo={this.props.convo} />
      </div>
    )
  }
}
