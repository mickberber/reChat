import React, { Component } from 'react';
import Messages from './msgs/messages';
import ChatContainer from './chat/chatContainer';
import Footer from './footer';
//import Header from './header';
const Horizon = require('@horizon/client');
const horizon = Horizon({ secure: false });
const chat = horizon('messages');

import Deets from './user/deets';

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

  sendMessage(text) {
    if(text === '') {
      alert('Invalid Submission');
      return;
    }
    let now = Date.now();
    let message = {
      picture: window.cheating.picture.data.url,
      text: text,
      author: window.cheating.name,
      date: now
    }
    chat.store(message);
  }

  render() {
    return (
        <div className='container-fluid'>
          <div className='row'>
          <Deets />
          <ChatContainer
            sendMessage={this.sendMessage}
          />
          </div>
          <div className='row'>
          <Messages convo={this.state.convo}/>
          </div>
          <div className='row'>
          </div>
          <Footer />
        </div>
      );
  }
}

export default App;
