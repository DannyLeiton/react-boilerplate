import React, { Component } from 'react';
import { SurveyRow } from '../SurveyRow';

import './styles.css';

class SurveyList extends Component {
    render() {
        const { surveys, message } = this.props;
        return (
            <div>
                <h1>Customer Survey List</h1>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Quality</th>
                            <th>Expertise</th>
                            <th>Culture</th>
                            <th>Average</th>
                        </tr>
                    </thead>
                    <tbody>
                        {surveys.map((survey) => <SurveyRow key={survey.id} {...survey} />)}
                    </tbody>
                </table>
                {message}
            </div>
        );
    }
};

export { SurveyList };