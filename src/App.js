import React, { Component } from 'react';
import axios from 'axios';
import { SurveyList, SurveyForm } from './Components';

import './App.css';

class App extends Component {
  state = {
    surveys: []
  };

  getSurveys = () => {
    axios.get(`http://techtestbackend.azurewebsites.net/api/surveys`)
      .then(response => {
          if(response && response.data) {
              this.setState({ surveys: response.data });
          }
          else {
              this.setState({ message: 'No Surveys so far' });
          }
      })
      .catch(err => {
          this.setState({ message: err.message });
      });
  }

  componentWillMount = () => {
    this.getSurveys();
  };

  addNewSurvey = () => {
    this.getSurveys();
  };  

  render() {
    return (
      <div className="App">
        <SurveyForm onSubmit={this.addNewSurvey} />
        <SurveyList surveys={this.state.surveys}/>
      </div>
    );
  }
}

export default App;
