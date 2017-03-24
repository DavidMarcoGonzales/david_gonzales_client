import React from 'react';


const CardPC = (props) => {
    return (
        <div>
             <h1>{props.card.title}</h1>
             <h2>{props.card.question}</h2>
             <h3>{props.card.conclusion}</h3>
             <h4>{props.card.answers}</h4>
             
             {JSON.stringify(props.card)}
        </div>
    );
};

export default CardPC;