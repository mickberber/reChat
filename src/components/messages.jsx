import React, { Component } from 'react';
import Message from './message';

class Messages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      convo: [{text: 'this is text', author: '@steedhelix'},
              {text: 'this is some text', author: '@steedhelix'},
              {text: 'this is more text', author: '@steedhelix'},
              {text: 'this is other text', author: '@steedhelix'}]
    };
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
