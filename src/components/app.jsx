import React, { Component } from 'react';
import Messages from './msgs/messages';
import ChatContainer from './chat/chatContainer';
const Horizon = require('@horizon/client');
const horizon = Horizon({ secure: false });
const chat = horizon('messages');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      text: ''
    }
  }

  handleChangeAuthor(event) {
    this.setState({author: event.target.value});
  }

  handleChangeText(event) {
    this.setState({text: event.target.value});
  }

  sendMessage() {
    if(this.state.text === '' || this.state.author === '') {
      alert('Invalid Submission');
      return;
    }
    let message = {
      text: this.state.text,
      author: this.state.author,
      date: new Date.now()
    }
    chat.store(message);
  }

  render() {
    return (
        <div>
          <ChatContainer
            handleChangeAuthor={this.handleChangeAuthor}
            handleChangeText={this.handleChangeText}
            sendMessage={this.sendMessage}
          />
          <Messages chat={chat}/>
        </div>
      );
  }
}

export default App;
