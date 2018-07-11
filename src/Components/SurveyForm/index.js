import React, { Component } from 'react';
import axios from 'axios';

import './styles.css';

class SurveyForm extends Component {
    state = { quality: 5, expertise: 5, culture: 5, comments: "You are great!", message: null }
  
    handleSubmit = (event) => {
      event.preventDefault();
      this.setState({ ...this.state, message: 'Saving Info...'});
      const { quality, expertise, culture, comments } = this.state
      const payload = { quality, expertise, culture, comments};
      axios.post(`http://techtestbackend.azurewebsites.net/api/surveys`, payload)
        .then(resp => {
          this.props.onSubmit(payload);
          this.setState({ message: null, disableButton: false });
        })
        .catch(err => {
            this.setState({ message: err.message, disableButton: false});
        });
    };

    changeQualitySelection = (event) => {
        this.setState({ ...this.state, quality: Number(event.target.value)});
    }

    changeExpertiseSelection = (event) => {
        this.setState({ ...this.state, expertise: Number(event.target.value)});
    }

    changeCultureSelection = (event) => {
        this.setState({ ...this.state, culture: Number(event.target.value)});
    }

    handleCommentsChange = (event) => {
        this.setState({ ...this.state, comments: event.target.value});
    }
  
    render() {
      const { quality, expertise, culture, comments, message } = this.state;        

      return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <h1>How would you rate us?</h1>
                <div className="question">
                    <span>Quality</span>
                    <input type="radio" name="quality" value="1" onChange={this.changeQualitySelection} checked={quality === 1}/>
                    <input type="radio" name="quality" value="2" onChange={this.changeQualitySelection} checked={quality === 2}/> 
                    <input type="radio" name="quality" value="3" onChange={this.changeQualitySelection} checked={quality === 3}/>
                    <input type="radio" name="quality" value="4" onChange={this.changeQualitySelection} checked={quality === 4}/>
                    <input type="radio" name="quality" value="5" onChange={this.changeQualitySelection} checked={quality === 5}/>
                </div>
                <div className="question">
                    <span>Expertise</span>
                    <input type="radio" name="expertise" value="1" onChange={this.changeExpertiseSelection} checked={expertise === 1}/>
                    <input type="radio" name="expertise" value="2" onChange={this.changeExpertiseSelection} checked={expertise === 2}/> 
                    <input type="radio" name="expertise" value="3" onChange={this.changeExpertiseSelection} checked={expertise === 3}/>
                    <input type="radio" name="expertise" value="4" onChange={this.changeExpertiseSelection} checked={expertise === 4}/>
                    <input type="radio" name="expertise" value="5" onChange={this.changeExpertiseSelection} checked={expertise === 5}/>
                </div>
                <div className="question">
                    <span>Culture</span>
                    <input type="radio" name="culture" value="1" onChange={this.changeCultureSelection} checked={culture === 1}/>
                    <input type="radio" name="culture" value="2" onChange={this.changeCultureSelection} checked={culture === 2}/> 
                    <input type="radio" name="culture" value="3" onChange={this.changeCultureSelection} checked={culture === 3}/>
                    <input type="radio" name="culture" value="4" onChange={this.changeCultureSelection} checked={culture === 4}/>
                    <input type="radio" name="culture" value="5" onChange={this.changeCultureSelection} checked={culture === 5}/>
                </div>
                <div className="question">
                    <span>Comments</span>
                    <textarea value={comments} onChange={this.handleCommentsChange}></textarea>
                </div>
                <input className="Submit-button" type="submit" value="Submit"></input>
            </form>
            <div className="Error-message">
                {message}
            </div>
        </div>
      );
    }
  }

  export { SurveyForm };