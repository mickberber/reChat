import React, { Component } from 'react';
import Message from './message';

class Messages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      convo: [{text: 'this is text'},
              {text: 'this is some text'},
              {text: 'this is more text'},
              {text: 'this is other text'}]
    };
  }
  render() {
    let msgsjsx = this.state.convo.map(function(message){
      return <Message msg={message} />
    });
    return (
      <div>
        {msgsjsx}
      </div>
    );
  }
}

export default Messages;
