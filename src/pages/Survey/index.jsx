import * as React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Survey() {
    const { questionNumber } = useParams();

    // Parse the question number from the URL or use the first question by default
    const question = parseInt(questionNumber, 10) || 1;

    return (
        <div>
            <h1>Survey 🧮</h1>
            <h2>Question {question}</h2>
            <Link to={question === 1 ? `/survey/1` : `/survey/${question - 1}`}>back</Link>
            &emsp;{question === 10 ? <Link to={'/results'}>Result</Link>  :
                <Link to={`/survey/${question + 1}`}>next</Link>
            }

        </div>
    );
}
