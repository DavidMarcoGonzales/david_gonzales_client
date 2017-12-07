import React, {  Component } from 'react';
import PropTypes from 'prop-types';
import { asyncSetCard } from './Redux/actions/cardActions';
import { connect } from "react-redux";
import CardPC from './CardPC';
class Card extends Component {
    componentWillMount() {
        let myURI = ''; {
            let { api, page, section, subsection, card } = this.props.match.params;
            console.log(card);
            if (card === undefined)
             card=1;
            myURI = `/${api}/${page}/${section}/${subsection}/${card}`;
        }
        this.props.dispatch(asyncSetCard(myURI));
    }
    componentWillReceiveProps(nextProps) {
        let myURI = ''; {
            let { api, page, section, subsection, card } = this.props.match.params;
            console.log(card);
            if (card === undefined)
            card=1;
            myURI = `/${api}/${page}/${section}/${subsection}/${card}`;
        }
        let myNewURI = ''; {
            let { api, page, section, subsection, card } = nextProps.match.params;
            console.log(card);
            if (card === undefined)
            card=1;
            myNewURI = `/${api}/${page}/${section}/${subsection}/${card}`
        }
        if (myURI !== myNewURI) {
            this.props.dispatch(asyncSetCard(myNewURI));
        }
    }
    render() {
        return (
            <div className='col-md-9' style={{ border: '1px solid rgb(235,235,235)', marginBottom: '40px', paddingTop: '15px' }}>
                <CardPC
                    card={this.props.card}
                    dispatch={this.props.dispatch}
                />
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
