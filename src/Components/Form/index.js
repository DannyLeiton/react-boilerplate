import React, { Component } from 'react';
import axios from 'axios';

import './styles.css';

class Form extends Component {
    state = { userName: '', message: null, disableButton: false }
  
    handleSubmit = (event) => {
      event.preventDefault();
      this.setState({ ...this.state, disableButton: true, message: 'Retrieving User...'});
      const { userName } = this.state
      axios.get(`https://api.github.com/users/${userName}`)
        .then(resp => {
          this.props.onSubmit(resp.data);
          this.setState({ userName: '', message: null, disableButton: false });
        })
        .catch(err => {
            this.setState({userName, message: err.message, disableButton: false});
        });
    };
  
    render() {
      const { userName, message, disableButton } = this.state;
    
      return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <input className="Text-input"
                    type="text"
                    value={userName}
                    onChange={(event) => this.setState({ ...this.state, userName: event.target.value })}
                    placeholder="Type a Github username" required />
                <button className="Submit-button" type="submit" disabled={disableButton}>Add Card</button>
            </form>
            <div className="Error-message">
                {message}
            </div>
        </div>
      );
    }
  }

  export { Form };