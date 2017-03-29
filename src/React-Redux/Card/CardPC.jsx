import React, { PropTypes, Component } from 'react';
// import RDFTs from './ReasonDetailFactTransitions';

class CardPC extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         title: props.title,
    //         topic: props.topic,
    //         rdfts: props.rdfts,
    //         conclusion: props.conclusion
    //     }
    // }
    render() {
        return (
            <div>
                <h3>Title: {this.props.card.title}</h3>
                <ul>
                    <li>{this.props.card.vid.type}</li>
                    <li>{this.props.card.vid.src}</li>
                    <li>{this.props.card.vid.border}</li>
                    <li>{this.props.card.vid.width}</li>
                    <li>{this.props.card.vid.height}</li>
                </ul>

                <h4>Topic: {this.props.card.topic}</h4>
                <h5>body: {this.props.card.accordBody}</h5>
                <h5>Conclusion: {this.props.card.conclusion}</h5>
                                {this.props.card.rdfts.map((item)=><h6>{item}</h6>)}

            </div>
        );
    }
}
CardPC.propTypes = {
    card: PropTypes.object.isRequired
};

export default CardPC;













/*import React from 'react';
import Rdfts from './ReasonDetailFactTransitions'


const CardPC = ({ title, topic, rdfts, conclusion }) => {
    return (
        <div>
            <h2>Title: {title}</h2>
            <h3>Topic: {topic}</h3>
            <Rdfts rdfts={rdfts} />
            <h3>Conclusion: {conclusion}</h3>
        </div>
    );
};
// CardPC.propTypes = {
//     title: PropTypes.string.isRequired,
//     topic: PropTypes.string.isRequired,
//     rdfts: PropTypes.array.isRequired,
//     conclusion: PropTypes.string.isRequired
// };
export default CardPC;*/