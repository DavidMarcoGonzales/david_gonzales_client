import React, { Component } from 'react';
import { asyncSetCard } from '../../Redux/actions/cardActionsCreator';
import { connect } from "react-redux";



class Card extends Component {

    componentWillMount() {
        let myURI = ''; {
            let { page, section, subsection } = this.props.match.params;
            myURI = `/${page}/${section}/${subsection}`;
        }
        console.log(myURI);
        this.props.dispatch(asyncSetCard(myURI));

    }

    componentWillReceiveProps(nextProps) {
        let myURI = ''; {
            let { page, section, subsection } = this.props.match.params;
            myURI = `/${page}/${section}/${subsection}`;
        }
        let myNewURI = ''; {
            let { page, section, subsection } = nextProps.match.params;
            myNewURI = `/${page}/${section}/${subsection}`
        }

        console.log(myURI);
        console.log(myNewURI);

        if (myURI !== myNewURI) {
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