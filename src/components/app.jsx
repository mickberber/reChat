import React, { Component } from 'react';
import Messages from './msgs/messages';
import ChatContainer from './chat/chatContainer';
import Footer from './footer';
//import Header from './header';
const Horizon = require('@horizon/client');
const horizon = Horizon({ secure: false });
const chat = horizon('messages');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      convo: []
    }

    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {
    chat.order('date', 'descending').limit(100).watch().subscribe(
      (messages) => {
        this.setState({convo: messages});
      },
      (err) => {
        console.log(err);
      }
    );
  }

  sendMessage(author, text) {
    if(text === '' || author === '') {
      alert('Invalid Submission');
      return;
    }
    let now = Date.now();
    let message = {
      text: text,
      author: author,
      date: now
    }
    chat.store(message);
  }

  render() {
    return (
        <div>
          <ChatContainer
            sendMessage={this.sendMessage}
          />
          <Messages convo={this.state.convo}/>
          <Footer />
        </div>
      );
  }
}

export default App;
