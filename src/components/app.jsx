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
      convo: [],
      author: '',
      text: ''
    }
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

  render() {
    return (
        <div>
          <ChatContainer
            handleChangeAuthor={this.handleChangeAuthor.bind(this)}
            handleChangeText={this.handleChangeText.bind(this)}
            sendMessage={this.sendMessage.bind(this)}
          />
          <Messages convo={this.state.convo}/>
          <Footer />
        </div>
      );
  }
}

export default App;
