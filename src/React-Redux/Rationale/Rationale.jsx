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
          <Accordion>
            <Panel header="Physical Restraint" eventKey="1">
              <ListGroup >
                <ListGroupItem >
                  <NavLink to="/Rationale/Rationale/Need">Reducing Need</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/Rationale/Rationale/Model">Model</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/Rationale/Rationale/Milieu">Therapeutic Milieu</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/Rationale/Rationale/Children">Children</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/Rationale/Rationale/Relationship">Therapeutic Relationship</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/Rationale/Rationale/Quiz">Quiz</NavLink>
                </ListGroupItem>
              </ListGroup>
            </Panel>
            <Panel header="TCI Domains" eventKey="2">
              <ListGroup >
                <ListGroupItem >
                  <NavLink to="/Rationale/TCI/Model">Stress Model</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/Rationale/TCI/Awareness">Self-Awareness</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/Rationale/TCI/Child">Importance of Knowing the Child</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/Rationale/TCI/Environment">Importance of the Environment</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/Rationale/TCI/Skills">Importance of Skill Development</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/Rationale/TCI/Quiz">Quiz</NavLink>
                </ListGroupItem>
              </ListGroup>
            </Panel>
            <Panel header="Therapeutic Milieu" eventKey="3">
              <ListGroup >
                <ListGroupItem >
                  <NavLink to="/Rationale/Milieu/Listening">Active Listening</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/Rationale/Milieu/BehavioralSupport">Behavioral Support</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/Rationale/Milieu/PowerStruggle">Power Struggles</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/Rationale/Milieu/Quiz">Quiz</NavLink>
                </ListGroupItem>
              </ListGroup>
            </Panel>
            <Panel header="Children" eventKey="4">
              <ListGroup >
                <ListGroupItem >
                  <NavLink to="/Rationale/Children/Aggression">Aggressive Behavior</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/Rationale/Children/NonVerbal">Non Verbal Communication</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/Rationale/Children/PotentialViolence">Potential Violence</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/Rationale/Children/CoRegulation">Crisis Co-regulation</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/Rationale/Children/LSI">Life Space Interview</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/Rationale/Children/Quiz">Quiz</NavLink>
                </ListGroupItem>
              </ListGroup>
            </Panel>
            <Panel header="Therapeutic Relationship" eventKey="5">
            </Panel>
          </Accordion>
        </section>

        <Route
          path="/:page/:section/:subsection"
          component={Card}
        />

      </div>
    )
  }
}

export default Rationale;
