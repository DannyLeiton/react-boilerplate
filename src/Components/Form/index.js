import React, { Component } from 'react';
import axios from 'axios';

import './styles.css';

class Form extends Component {
    state = { userName: '' }
  
    handleSubmit = (event) => {
      const { userName } = this.state
      event.preventDefault();
      axios.get(`https://api.github.com/users/${userName}`)
        .then(resp => {
          this.props.onSubmit(resp.data);
          this.setState({ userName: '' });
        });
    };
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input className="Text-input"
            type="text"
            value={this.state.userName}
            onChange={(event) => this.setState({ userName: event.target.value })}
            placeholder="Type a Github username" required />
          <button className="Submit-button" type="submit">Add Card</button>
        </form>
      );
    }
  }

  export { Form };