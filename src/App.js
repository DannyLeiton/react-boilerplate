import React, { Component } from 'react';

import { CardList, Form } from './Components';

import './App.css';

class App extends Component {
  state = {
    cards: []
  };

  addNewCard = (cardInfo) => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }));
  };

  removeCard = (cardIndex) => {
    const { cards } = this.state;
    cards.splice(cardIndex, 1);
    const newCards = cards;
    this.setState({cards: newCards});
  }

  render() {
    return (
      <div className="App">
        <Form onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards} onRemove={this.removeCard} />
      </div>
    );
  }
}

export default App;
