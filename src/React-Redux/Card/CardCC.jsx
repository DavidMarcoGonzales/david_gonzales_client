import React, { PropTypes, Component } from 'react';
import { asyncSetCard } from '../../Redux/actions/cardActionsCreator';
import { connect } from "react-redux";
import CardPC from './CardPC';




class Card extends Component {


    componentWillMount() {
        console.log("componentWillMount")
        let myURI = ''; {
            let { api, page, section, subsection, card } = this.props.match.params;
            myURI = `/${api}/${page}/${section}/${subsection}/${card}`;
        }
        console.log("json call 1", myURI)
        this.props.dispatch(asyncSetCard(myURI));

    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps")

        let myURI = ''; {
            let { api, page, section, subsection, card } = this.props.match.params;
            myURI = `/${api}/${page}/${section}/${subsection}/${card}`;
        }
        let myNewURI = ''; {
            let { api, page, section, subsection, card } = nextProps.match.params;
            myNewURI = `/${api}/${page}/${section}/${subsection}/${card}`
        }


        if (myURI !== myNewURI) {
            console.log("json call 2")
            this.props.dispatch(asyncSetCard(myNewURI));
        } else { console.log("not equal") }
    }

    render() {
        
        return (
            <div className='col-md-9' style={{ border: '1px solid black' }}>
                {console.log("CardCC render before CardPC")}
                <CardPC
                   card={this.props.card}
                   dispatch={this.props.dispatch}
                />
                {console.log("CardCC render after CardPC")}
            </div>
        );
    }
}

Card.propTypes = {
    card: PropTypes.object.isRequired
}
function mapStateToProps(state) {
    return {
        card: state.card
    }
}
export default connect(mapStateToProps)(Card);