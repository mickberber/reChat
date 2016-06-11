import React, { Component } from 'react';
import Message from './message';

class Messages extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      convo: []
    };
  }

  componentDidMount() {
    this.props.chat.order('date', 'descending').watch().subscribe(
      (messages) => {
        this.setState({convo: messages});
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
