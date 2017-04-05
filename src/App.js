import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      messages: [
        {id: 1, body: 'Hi', nested_messages: []}
      ]
    }
  }

  loadMessages(evt) {
    this.setState({
      messages: [
        {id: 1, body: 'Hi', nested_messages: [
          {id: 2, body: 'Hi2'},
          {id: 3, body: 'Hi3'}
        ]}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Dialogs constructor</h2>
        </div>
        {this.state.messages.map(message =>
          <div key={message.id} className="Message-Box">
            <div className="Message-Row">
              <div className="Message" onClick={this.loadMessages.bind(this)}>
                {message.body}
              </div>
            </div>
            <div className="Message-Row">
            {message.nested_messages.map(message =>
              <div key={message.id} className="Message">
                {message.body}
              </div>
            )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
