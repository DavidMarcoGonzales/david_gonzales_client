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
        let getMyArray = (rdfts, topic) => {
            return (<div>
                <h3>{topic || ""}</h3>
                <ul>
                    {rdfts.map((item, index) => <li key={index}>{item || ""}</li>)}
                </ul>
            </div>)
        }
        let { rdfts1, rdfts2, rdfts3, rdfts4, rdfts5 } = this.props.card;
        let { topic1, topic2, topic3, topic4, topic5 } = this.props.card;
        let myArray1 = (rdfts1.length !== 0) ? getMyArray(rdfts1, topic1) : null;
        let myArray2 = (rdfts2.length !== 0) ? getMyArray(rdfts2, topic2) : null;
        let myArray3 = (rdfts3.length !== 0) ? getMyArray(rdfts3, topic3) : null;
        let myArray4 = (rdfts4.length !== 0) ? getMyArray(rdfts4, topic4) : null;
        let myArray5 = (rdfts5.length !== 0) ? getMyArray(rdfts5, topic5) : null;
        return (
            <div>
                <NavLink className="col-md-1 btn btn-primary pull-left" to={this.props.card.prevURN || ""}>prev</NavLink>
                <NavLink className="col-md-1 btn btn-primary pull-right" to={this.props.card.nextURN || ""}>Next</NavLink>
                <br />
                <hr />
                <h2>{this.props.card.title}</h2>
                {uTubeVid}
                {myArray1}
                {myArray2}
                {myArray3}
                {myArray4}
                {myArray5}
                <h3>{this.props.card.body || ""}</h3>
                <h3>{this.props.card.conclusion || ""}</h3>
            </div>
        );
    }
}
CardPC.propTypes = {
    card: PropTypes.object.isRequired
};

export default CardPC;