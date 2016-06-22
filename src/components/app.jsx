import React, { Component } from 'react';
//import Header from './header';
const Horizon = require('@horizon/client');
const horizon = Horizon({ secure: false });
const chat = horizon('messages');

import Login from './login/login';
import ChatContainer from './chat/chatContainer';
import Footer from './footer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      convo: [],
      author: '',
      text: '',
      chatIsHidden : 'hidden',
      loginIsHidden : 'visible'
    }

    this.loginAttempt = this.loginAttempt.bind(this);
    this.handleChangeAuthor = this.handleChangeAuthor.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {
    chat.watch().subscribe(
      (messages) => {
        let allMSGS = messages.sort(function(a, b){
          return b.date - a.date;
        })
        this.setState({convo: allMSGS});
      },
      (err) => {
        console.log(err);
      }
    );
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
    let now = Date.now();
    let message = {
      text: this.state.text,
      author: this.state.author,
      date: now
    }
    chat.store(message);
  }

  loginAttempt() {
    if(true) {
      this.state.loginIsHidden = 'hidden';
      this.state.chatIsHidden = 'visible';
      this.setState({loginIsHidden : 'hidden', chatIsHidden : 'visible'});
    }
  }

  render() {
    return (
        <div>
          <Login isHidden={this.state.loginIsHidden} loginAttempt={this.loginAttempt}/>
          <ChatContainer
            handleChangeAuthor={this.handleChangeAuthor}
            handleChangeText={this.handleChangeText}
            sendMessage={this.sendMessage}
            isHidden={this.state.chatIsHidden}
            convo={this.state.convo}
          />
          <Footer />
        </div>
      );
  }
}

export default App;
