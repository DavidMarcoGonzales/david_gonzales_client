import React, { Component } from 'react';


class Card extends Component {

    render() {

        return (
            <div className='col-md-9' style={{border:'1px solid black'}}>
                dave {console.log("Card " + JSON.stringify( this.props.match))}
            </div>
        );
    }
}


export default Card;