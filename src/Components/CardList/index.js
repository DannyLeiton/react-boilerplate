import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Card } from '../Card';
import './styles.css';

class CardList extends Component {
    handleRemove = (index) => {
        this.props.onRemove(index);
    };

    render() {
        const { cards } = this.props;
        return (
            <div>
                {cards.length > 0 && cards.map((card, i) => <Card key={card.id + i} card={card} index={i} removeCard={this.handleRemove} />)}
            </div>
        );
    }
};

export { CardList };