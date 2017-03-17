import React, { PropTypes, Component } from 'react';
import { setCard } from '../../Redux/actions/cardActionsCreator';
import { connect } from "react-redux";

class Card extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = { card: { uri: "" } };
    }
    componentWillMount() {
        this.props.dispatch(setCard("dave"))
    }


    render() {

        return (
            <div className='col-md-9' style={{ border: '1px solid black' }}>
                dave1 {JSON.stringify( this.props.match)}
            </div>
        );
    }
}

Card.propTypes = {
  card: React.PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}
function mapStateToProps(state) {
  return ({
    card: state.card
  })
}
export default connect(mapStateToProps)(Card) ;