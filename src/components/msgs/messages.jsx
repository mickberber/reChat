import React, { Component } from 'react';
import Message from './message';

class Messages extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    let msgsjsx = this.props.convo.map(function(message, i){
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
