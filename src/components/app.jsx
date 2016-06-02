import React, { Component } from 'react';
import Messages from './messages';
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
    console.log(event.target.value);
    this.setState({author: event.target.value});
  }

  handleChangeText(event) {
    console.log(event.target.value);
    this.setState({text: event.target.value});
  }

  sendMessage() {
    if(this.state.text === '' || this.state.author === '') {
      alert('Invalid Submission');
      return;
    }
    let message = {
      text: this.state.text,
      author: this.state.author
    }
    chat.store(message);
  }

  render() {
    return (
        <div>
          <form>
            <div className='center'>
              <button onClick={this.sendMessage.bind(this)}>Send Message</button>
              <input onChange={this.handleChangeAuthor.bind(this)} placeholder='Name'></input>
              <input onChange={this.handleChangeText.bind(this)} placeholder='Message'></input>
            </div>
          </form>
          <Messages chat={chat}/>
        </div>
      );
  }
}

export default App;
