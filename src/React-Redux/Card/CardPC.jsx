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
        let myArray1 = null;
        if (this.props.card.rdfts1.length !== 0) {
            myArray1 = <ul>
                {this.props.card.rdfts1.map((item, index) => <li key={index}>{item || ""}</li>)}
            </ul>
        }
        let myArray2 = null;
        if (this.props.card.rdfts2.length !== 0) {
            myArray2 = <ul>
                {this.props.card.rdfts2.map((item, index) => <li key={index}>{item || ""}</li>)}
            </ul>
        }
        let myArray3 = null;
        if (this.props.card.rdfts3.length !== 0) {
            myArray3 = <ul>
                {this.props.card.rdfts3.map((item, index) => <li key={index}>{item || ""}</li>)}
            </ul>
        }
        let myArray4 = null;
        if (this.props.card.rdfts4.length !== 0) {
            myArray4 = <ul>
                {this.props.card.rdfts4.map((item, index) => <li key={index}>{item || ""}</li>)}
            </ul>
        }
        let myArray5 = null;
        if (this.props.card.rdfts5.length !== 0) {
            myArray5 = <ul>
                {this.props.card.rdfts5.map((item, index) => <li key={index}>{item || ""}</li>)}
            </ul>
        }
        return (
            <div>
                <h3>{this.props.card.title}</h3>
                {uTubeVid}
                <div>
                <h4>{this.props.card.topic1 || ""}</h4>
                {myArray1}
                <div>
                </div>
                <h4>{this.props.card.topic2 || ""}</h4>
                {myArray2}
                <div>
                </div>
                <h4>{this.props.card.topic3 || ""}</h4>
                {myArray3}
                <div>
                </div>
                <h4>{this.props.card.topic4 || ""}</h4>
                {myArray4}
                <div>
                </div>
                <h4>{this.props.card.topic5 || ""}</h4>
                {myArray5}
                </div>
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