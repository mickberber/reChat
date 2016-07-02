import React, { Component } from 'react';
import Messages from './msgs/messages';
import ChatContainer from './chat/chatContainer';
import Footer from './footer';
import UserDash from './UserDash';

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

  sendMessage(text) {
    if(text === '') {
      alert('Invalid Submission');
      return;
    }
    let now = Date.now();
    let storage = window.storage;
    let message = {
      picture: storage.picture.data.url,
      text: text,
      author: storage.name,
      date: now
    }
    chat.store(message);
  }

  render() {
    return (
        <div className='container-fluid'>
          <UserDash storage={window.storage} />
          <div className='row' style={{height: '55px'}}/>
          <div className='row' style={{marginTop: '0px', marginBottom: '5px'}}>
          <ChatContainer
            sendMessage={this.sendMessage}
            user={window.storage}
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
