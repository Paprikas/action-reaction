import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      rows: [
        {id: 1, messages: [
          {id: 1, body: 'hi'}
        ]}
      ]
    }
  }

  loadMessages(id, evt) {
    let rows = []

    if (id === 1) {
      rows = [
        {id: 1, messages: [
          {id: 1, body: 'hi'}
        ]},
        {id: 2, messages: [
          {id: 2, body: 'Message'},
          {id: 3, body: 'Message rwo!'},
          {id: 4, body: 'Message dskvdfkvfdkn!'}
        ]}
      ]
    } else {
      rows = [
        {id: 1, messages: [
          {id: 1, body: 'hi'}
        ]},
        {id: 2, messages: [
          {id: 2, body: 'Message'},
          {id: 3, body: 'Message rwo!'},
          {id: 4, body: 'Message dskvdfkvfdkn!'}
        ]},
        {id: 3, messages: [
          {id: 5, body: 'dfmvndln'},
          {id: 6, body: 'Sbjbjbhit rwo!'},
          {id: 7, body: 'Sbjbjbhit dskvdfkvfdkn!'}
        ]}
      ]
    }

    this.setState({
      rows: rows
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Dialogs constructor</h2>
        </div>
        <div className="Message-Box">
          {this.state.rows.map(row =>
            <div key={row.id} className="Message-Row">
              <div className="Message-Row">
                {row.messages.map(message =>
                  <div key={message.id} className="Message" onClick={this.loadMessages.bind(this, message.id)}>
                    {message.body}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
