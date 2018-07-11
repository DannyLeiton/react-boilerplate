import React from 'react';

import './styles.css';

const SurveyRow = (props) => {
    return (
      <tr>
          <td>{props.id}</td>
          <td>{props.quality}</td>
          <td>{props.expertise}</td>
          <td>{props.culture}</td>
          <td>{props.average}</td>
      </tr>
    );
};

export { SurveyRow };