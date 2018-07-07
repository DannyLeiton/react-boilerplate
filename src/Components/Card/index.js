import React from 'react';
import './styles.css';

const Card = (props) => {
  return (
    <div className="Card-section">
      <img alt="User Pic" width="75" src={props.avatar_url} />
      <div className="Card-fonts">
        <div className="Card-name">
          {props.name}
        </div>
        <div>{props.company}</div>
      </div>
    </div>
  );
};

export { Card };