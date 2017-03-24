
import React, {PropTypes} from 'react';


const CardPC = ({title, question, conclusion, answers}) => {
    return (
        <div>
             <h1>Title: {title}</h1>
             <h2>Question: {question}</h2>
             <h3>Conclusion: {conclusion}</h3>
             {answers.map( answer => <h4>Answer: {answer}</h4>)}
        </div>
    );
};
CardPC.propTypes = {
    title: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    conclusion: PropTypes.string.isRequired,
    answers: PropTypes.array.isRequired
};
export default CardPC;