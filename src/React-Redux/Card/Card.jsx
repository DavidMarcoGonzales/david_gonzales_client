import React, { Component } from 'react';
import { asyncSetCard } from '../../Redux/actions/cardActionsCreator';
import { connect } from "react-redux";

class Card extends Component {

    componentWillMount() {
        this.props.dispatch (asyncSetCard(`http://david-gonzales-1.herokuapp.com/${this.props.match.params.page}/${this.props.match.params.section}/${this.props.match.params.subsection}`));

    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.subsection === nextProps.match.params.subsection) {
            console.log("equals")
        } else {
            console.log("not equal")
            this.props.dispatch (asyncSetCard(`http://david-gonzales-1.herokuapp.com/${nextProps.match.params.page}/${nextProps.match.params.section}/${nextProps.match.params.subsection}`));
        }
    }



    render() {

        return (
            <div className='col-md-9' style={{ border: '1px solid black' }}>

                `http://david-gonzales-1.herokuapp.com/{this.props.match.params.page}/{this.props.match.params.section}/{this.props.match.params.subsection}`
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