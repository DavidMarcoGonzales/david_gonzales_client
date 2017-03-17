/**
 * Created by David on 10/27/2016.
 */
import { Route, NavLink } from "react-router-dom";
import React from "react";
import { ListGroup, ListGroupItem, Accordion, Panel } from "react-bootstrap";
import  Card  from "../Card/Card";


class Rationale extends React.Component {

  render() {
    return (
      <div>
        <section className="col-md-3" >
          {/*style={{
            border: '1px solid red'
          }} >*/}
          <Accordion>
            <Panel header="Physical Restraint" eventKey="1">
              <ListGroup >
                <ListGroupItem >
                  <NavLink to="/Rationale/Need">Reducing Need</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/Rationale/Model">Model</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/Rationale/Milieu">Therapeutic Milieu</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/Rationale/Children">Children</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/Rationale/Relationship">Therapeutic Relationship</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/Rationale/RestraintQuiz">Quiz</NavLink>
                </ListGroupItem>
              </ListGroup>
            </Panel>
            <Panel header="TCI Domains" eventKey="2">
              <ListGroup >
                <ListGroupItem >
                  <NavLink to="/Rationale/Model">Stress Model</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/Rationale/Awareness">Self-Awareness</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/Rationale/Child">Importance of Knowing the Child</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/Rationale/Environment">Importance of the Environment</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/Rationale/Skills">Importance of Skill Development</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/Rationale/DomainQuiz">Quiz</NavLink>
                </ListGroupItem>
              </ListGroup>
            </Panel>
            <Panel header="Therapeutic Milieu" eventKey="3">
              <ListGroup >
                <ListGroupItem >
                  <NavLink to="/Rationale/Listening">Active Listening</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/Rationale/BehavioralSupport">Behavioral Support</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/Rationale/PowerStruggle">Power Struggles</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/Rationale/MilieuQuiz">Quiz</NavLink>
                </ListGroupItem>
              </ListGroup>
            </Panel>
            <Panel header="Children" eventKey="4">
              <ListGroup >
                <ListGroupItem >
                  <NavLink to="/Rationale/Aggression">Aggressive Behavior</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/Rationale/NonVerbal">Non Verbal Communication</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/Rationale/PotentialViolence">Potential Violence</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/Rationale/CoRegulation">Crisis Co-regulation</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/Rationale/LSI">Life Space Interview</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/Rationale/ChildrenQuiz">Quiz</NavLink>
                </ListGroupItem>
              </ListGroup>
            </Panel>
            <Panel header="Therapeutic Relationship" eventKey="5">
            </Panel>
          </Accordion>
        </section>

        <Route
          path="/:section/:subsection"
          component={Card}
        />

      </div>
    )
  }
}

export default Rationale;
