import React from 'react';
import { Card } from '../Card';
import './styles.css';

const CardList = (props) => {
    return (
        <div>
            {props.cards.map((card, i) => <Card key={card.id + i} {...card} />)}
        </div>
    );
};

export { CardList };