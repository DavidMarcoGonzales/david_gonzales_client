/**
 * Created by David on 10/26/2016.
 */
import React from "react";
import {NavLink} from "react-router-dom";
import {ListGroup, ListGroupItem, Col, Accordion, Panel} from "react-bootstrap";
class Situational_Awareness extends React.Component {
  render() {
    return (
      <div>
        <Col xs={6} md={3}>
          <Accordion>
            <Panel header="Crisis Prevention" eventKey="1">
              <ListGroup >
                <ListGroupItem >
                  <NavLink to="/repos/reactjs/react-router">Reducing Need</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/repos/reactjs/react-router">Model</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/repos/reactjs/react-router">Therapeutic Milieu</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/repos/reactjs/react-router">Children</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/repos/reactjs/react-router">Therapeutic Relationship</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/repos/reactjs/react-router">Quiz</NavLink>
                </ListGroupItem>
              </ListGroup>
            </Panel>
            <Panel header="Crisis as an Oppertunity" eventKey="2">
              <ListGroup >
                <ListGroupItem >
                  <NavLink to="/repos/reactjs/react-router">Stress Model</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/repos/reactjs/react-router">Self-Awareness</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/repos/reactjs/react-router">Importance of Knowing the Child</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/repos/reactjs/react-router">Importance of the Environment</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/repos/reactjs/react-router">Importance of Skill Development</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/repos/reactjs/react-router">Quiz</NavLink>
                </ListGroupItem>
              </ListGroup>
            </Panel>
            <Panel header="De-Escalating the Crisis" eventKey="3">
              <ListGroup >
                <ListGroupItem >
                  <NavLink to="/repos/reactjs/react-router">Active Listening</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/repos/reactjs/react-router">Behavioral Support</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/repos/reactjs/react-router">Power Struggles</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/repos/reactjs/react-router">Quiz</NavLink>
                </ListGroupItem>
              </ListGroup>
            </Panel>
            <Panel header="Managing the Crisis" eventKey="4">
              <ListGroup >
                <ListGroupItem >
                  <NavLink to="/repos/reactjs/react-router">Aggressive Behavior</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/repos/reactjs/react-router">Non Verbal Communication</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/repos/reactjs/react-router">Potential Violence</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/repos/reactjs/react-router">Crisis Co-regulation</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/repos/reactjs/react-router">Life Space Interview</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/repos/reactjs/react-router">Quiz</NavLink>
                </ListGroupItem>
              </ListGroup>
            </Panel>
            <Panel header="Safety Intervention" eventKey="5">
            </Panel>
          </Accordion>
        </Col>
        {this.props.children}
      </div>
    )
  }
}
export default Situational_Awareness;
