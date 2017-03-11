/**
 * Created by David on 10/27/2016.
 */
import React from "react";
import {ListGroup, ListGroupItem, Col, Accordion, Panel} from "react-bootstrap";
import NavLink from "../NavLink";

class Rationale extends React.Component {
  render() {
    return (
      <div>
        <Col xs={6} md={3}>
          <Accordion>
            <Panel header="Physical Restraint" eventKey="1">
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
            <Panel header="TCI Domains" eventKey="2">
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
            <Panel header="Therapeutic Milieu" eventKey="3">
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
            <Panel header="Children" eventKey="4">
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
            <Panel header="Therapeutic Relationship" eventKey="5">
            </Panel>
          </Accordion>
        </Col>
        {this.props.children}
      </div>
    )
  }
}
export default Rationale;
