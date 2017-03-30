import React, { PropTypes, Component } from 'react';
import { NavLink } from "react-router-dom";
import YouTube from 'react-youtube'

class CardPC extends Component {

    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                autoplay: 1
            }
        };
        let uTubeVid = null;
        if (this.props.card.vid.src !== "") {
            uTubeVid = <YouTube
                videoId={this.props.card.vid.src || ""}
                opts={opts}
            />
        }
        let myArray = null;
        if (this.props.card.rdfts.length !== 0) {
            myArray = <ul>
                {this.props.card.rdfts.map((item, index) => <li key={index}>{item || ""}</li>)}
            </ul>
        }
        return (
            <div>
                <h3>{this.props.card.title}</h3>
                {uTubeVid}
                <h4>{this.props.card.topic || ""}</h4>
                {myArray}
                <h5>{this.props.card.body || ""}</h5>
                <h5>{this.props.card.conclusion || ""}</h5>
                <NavLink to={this.props.card.prevURN || ""}>prev</NavLink>
                <NavLink to={this.props.card.nextURN || ""}>Next</NavLink>
            </div>
        );
    }
}
CardPC.propTypes = {
    card: PropTypes.object.isRequired
};

export default CardPC;