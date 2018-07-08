import React, { Component } from 'react';
import './styles.css';

class Card extends Component {

  onRemoveCard = (i) => {
     this.props.removeCard(i);
  }; 

  render() {
    return (
      <div className="Card-section">
        <img alt="User Pic" width="75" src={this.props.card.avatar_url} />
        <div className="Card-fonts">
          <div className="Card-name">
            {this.props.card.name}
          </div>
          <div>{this.props.card.company}</div>
          <button onClick={() => this.onRemoveCard(this.props.index)}>X</button>
        </div>
      </div>
    );
  }
};

export { Card };