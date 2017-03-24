import React, { Component } from 'react';
import { asyncSetCard } from '../../Redux/actions/cardActionsCreator';
import { connect } from "react-redux";



class Card extends Component {

    componentWillMount() {
        let myURI = ''; {
            let { api, page, section, subsection, card } = this.props.match.params;
            myURI = `/${api}/${page}/${section}/${subsection}/${card}`;
        }
        
        console.log(myURI);

        this.props.dispatch(asyncSetCard(myURI));

    }

    componentWillReceiveProps(nextProps) {

        let myURI = ''; {
            let { api, page, section, subsection, card } = this.props.match.params;
            myURI = `/${api}/${page}/${section}/${subsection}/${card}`;
        }
        let myNewURI = ''; {
            let { api, page, section, subsection, card } = nextProps.match.params;
            myNewURI = `/${api}/${page}/${section}/${subsection}/${card}`
        }

        console.log(myURI);
        console.log(myNewURI);

        if (myURI !== myNewURI) {
            console.log('Card line 36')
            this.props.dispatch(asyncSetCard(myNewURI));
        } else {console.log("not equal")}
    }

    render() {
        return (
            <div className='col-md-9' style={{ border: '1px solid black' }}>

            </div>
        );
    }
}

Card.propTypes = {
    card: React.PropTypes.object.isRequired,
    asyncSetCard: React.PropTypes.func
}
function mapStateToProps(state) {
    return ({
        card: state.card
    })
}
export default connect(mapStateToProps)(Card);