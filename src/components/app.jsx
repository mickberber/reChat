import React, { Component } from 'react';
import Messages from './messages';

class App extends Component {
  render() {
    return (
        <div>
          <form>
            <div className='center'>
              <button>Send Message</button>
              <input placeholder='By'></input>
              <input placeholder='write message here'></input>
            </div>
          </form>
          <Messages />
        </div>
      );
  }
}

export default App;
