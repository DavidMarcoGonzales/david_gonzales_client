import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { asyncSetCard } from './Redux/actions/cardActions';
import { connect } from "react-redux";
import CardPC from './CardPC';
const getFirstCard = (path) => {
  switch (path) {
    // Prevention
    case '/api/Workbook/Prevention/Need':
      return '58de9be71bb1a9fbc3cb8af0';
    // return '58de9c471bb1a9fbc3cb8af1';
    case '/api/Workbook/Prevention/Model':
      return '58dc0b0e533e693d7d43f9bb';
    case '/api/Workbook/Prevention/Milieu':
      return '58e694ff04bc3db715b513f0';
    case '/api/Workbook/Prevention/Children':
      return '58e7d472dc608472ff1b8e4c';
    case '/api/Workbook/Prevention/Relationship':
      return '58e81670dc608472ff1b8e59';
    // Opportunity
    case '/api/Workbook/Opportunity/StressModel':
      return '58e82f26dc608472ff1b8e60';
    case '/api/Workbook/Opportunity/SelfAwareness':
      return '58e95fc3bcb81241bc85edf5';
    case '/api/Workbook/Opportunity/Child':
      return '58ea4a7b93f0615f11573014';
    case '/api/Workbook/Opportunity/Environment':
      return '58ead06f9c0f981ab8571723';
    case '/api/Workbook/Opportunity/Skills':
      return '58eb22979c0f981ab8571729';
    // De-Escalating Crisis
    case '/api/Workbook/DeEscCrisis/Listening':
      return '58ebde1ad23b496ad008a3e6';
    case '/api/Workbook/DeEscCrisis/BehavioralSupport':
      return '58ecfc8cd23b496ad008a401';
    case '/api/Workbook/DeEscCrisis/CoRegEmFirstAid':
      return '58ed6876d23b496ad008a412';
    case '/api/Workbook/DeEscCrisis/ConflictCycle':
      return '58ed78d4d23b496ad008a41b';
    // Crisis
    case '/api/Workbook/ManageCrisis/Aggression':
      return '58ee7744d23b496ad008a42f';
    case '/api/Workbook/ManageCrisis/NonVerbal':
      return '58f1361926678b132de1df14';
    case '/api/Workbook/ManageCrisis/PotentialViolence':
      return '58f197d01e34b4d7214aa6ab';
    case '/api/Workbook/ManageCrisis/CoRegulation':
      return '58f1a0151e34b4d7214aa6b0';
    case '/api/Workbook/ManageCrisis/LSI':
      return '58f268d81e34b4d7214aa6c0';
    // Crisis
    case '/api/Workbook/Safety/Intervention':
      return '58f38dccb7eeb9850b9c4954';
    case '/api/Workbook/Safety/SafetyConcerns':
      return '58f3ab00b7eeb9850b9c4960';
    case '/api/Workbook/Safety/Documentation':
      return '58f3c269b7eeb9850b9c4967';
    case '/api/Workbook/Safety/Recovery':
      return '58f3dc2eb7eeb9850b9c496d';
    default:
      return '';
  }
}


class Card extends Component {

  componentWillMount() {
    let { api, page, section, subsection } = this.props.match.params;
    let myFirstCard = getFirstCard(`/${api}/${page}/${section}/${subsection}`);
    this.props.dispatch(asyncSetCard(`https://behavior-support.herokuapp.com/cardsById/${myFirstCard}`));
  }
  componentWillReceiveProps(nextProps) {
    let myCard = ''; {
      let { api, page, section, subsection, card } = this.props.match.params;
      if (card === undefined)
        card = getFirstCard(`/${api}/${page}/${section}/${subsection}`)
      myCard = card;
    }
    let myNewCard = ''; {
      let { api, page, section, subsection, card } = nextProps.match.params;
      if (card === undefined)
        card = getFirstCard(`/${api}/${page}/${section}/${subsection}`)
      myNewCard = card
    }
    console.log(myCard + " " + myNewCard);
    if (myCard !== myNewCard) {
      this.props.dispatch(asyncSetCard(`https://behavior-support.herokuapp.com/cardsById/${myNewCard}`));
    }
  }
  render() {
    let { api, page, section, subsection } = this.props.match.params
    return (
      <div className='col-md-9' style={{ border: '1px solid rgb(235,235,235)', marginBottom: '40px', paddingTop: '15px' }}>
        <CardPC
          myPath={`/${api}/${page}/${section}/${subsection}`}
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
