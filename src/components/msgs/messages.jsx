import React, { Component } from 'react';
import Message from './message';

class Messages extends Component {
  constructor(props) {
    super(props);
    this.chat = props.chat;
    this.state = {
      convo: []
    };
  }

  componentDidMount() {
    this.chat.watch().subscribe(
      (messages) => {
        let convo = messages.map(function(message) {
          return message
        });
        this.setState({convo: convo});
      },
      (err) => {
        console.log(err);
      }
    );
  }

  render() {
    let msgsjsx = this.state.convo.map(function(message, i){
      return <Message msg={message} key={i} />
    });
    return (
      <div className='container-fluid'>
        {msgsjsx}
      </div>
    );
  }
}

export default Messages;
