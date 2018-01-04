import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { setCard, asyncSetCard } from '../../Redux/actions/cardActions';
// './Redux/actions/cardActions';
import { connect } from "react-redux";
import VidCardPC from './VidCardPC';

class VidCard extends Component {

  componentWillMount() {
    let { card } = this.props.match.params;
    this.props.dispatch(asyncSetCard(`https://behavior-support.herokuapp.com/api/cards/${card}`));
  }
  componentWillReceiveProps(nextProps) {
    let myOldCard = '';
    {
      let { card } = this.props.match.params;
      myOldCard = card;
    }
    let myNewCard = '';
    {
      let { card } = nextProps.match.params;
      myNewCard = card;
    }
    if (myOldCard !== myNewCard) {
      this.props.dispatch(asyncSetCard(`https://behavior-support.herokuapp.com/api/cards/${myNewCard}`));
    }
  }
  componentWillUnmount(){
    this.props.dispatch(setCard({
      vid:{},
      rdfts1:[],
      rdfts2:[],
      rdfts3:[],
      rdfts4:[],
      rdfts5:[]
    }));
  }
  render() {
    return (
      <div className='col-md-9' style={{ border: '1px solid rgb(235,235,235)', marginBottom: '40px', paddingTop: '15px' }}>
        <VidCardPC
          card={this.props.card}
          dispatch={this.props.dispatch}
        />
      </div>
    );
  }
}
VidCard.propTypes = {
  card: PropTypes.object.isRequired
}
function mapStateToProps(state) {
  return {
    card: state.card
  }
}
export default connect(mapStateToProps)(VidCard);
