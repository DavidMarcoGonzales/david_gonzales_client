/**
 * Created by David on 10/27/2016.
 */
import { Route, NavLink } from "react-router-dom";
import React from "react";
import { ListGroup, ListGroupItem, Accordion, Panel } from "react-bootstrap";
import  CardCC  from "../Card/CardCC";

class Rationale extends React.Component {
  render() {
    return (
      <div>
        <section className="col-md-3" >
          <Accordion>
            <Panel header="Physical Restraint" eventKey="1">
              <ListGroup >
                <ListGroupItem >
                  <NavLink to="/api/Rationale/Restraint/Need/page1">Reducing Need</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Rationale/Restraint/Model/page1">Model</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Rationale/Restraint/Milieu/page1">Therapeutic Milieu</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Rationale/Restraint/Children/page1">Children</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Rationale/Restraint/Relationship/page1">Therapeutic Relationship</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Rationale/Restraint/Quiz/page1">Quiz</NavLink>
                </ListGroupItem>
              </ListGroup>
            </Panel>
            <Panel header="TCI Domains" eventKey="2">
              <ListGroup >
                <ListGroupItem >
                  <NavLink to="/api/Rationale/TCI/Model">Stress Model</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Rationale/TCI/Awareness">Self-Awareness</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Rationale/TCI/Child">Importance of Knowing the Child</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Rationale/TCI/Environment">Importance of the Environment</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Rationale/TCI/Skills">Importance of Skill Development</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Rationale/TCI/Quiz">Quiz</NavLink>
                </ListGroupItem>
              </ListGroup>
            </Panel>
            <Panel header="Therapeutic Milieu" eventKey="3">
              <ListGroup >
                <ListGroupItem >
                  <NavLink to="/api/Rationale/Milieu/Listening">Active Listening</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Rationale/Milieu/BehavioralSupport">Behavioral Support</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Rationale/Milieu/PowerStruggle">Power Struggles</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Rationale/Milieu/Quiz">Quiz</NavLink>
                </ListGroupItem>
              </ListGroup>
            </Panel>
            <Panel header="Children" eventKey="4">
              <ListGroup >
                <ListGroupItem >
                  <NavLink to="/api/Rationale/Children/Aggression">Aggressive Behavior</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Rationale/Children/NonVerbal">Non Verbal Communication</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/Rationale/Children/PotentialViolence">Potential Violence</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Rationale/Children/CoRegulation">Crisis Co-regulation</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Rationale/Children/LSI">Life Space Interview</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Rationale/Children/Quiz">Quiz</NavLink>
                </ListGroupItem>
              </ListGroup>
            </Panel>
            <Panel header="Therapeutic Relationship" eventKey="5">
            </Panel>
          </Accordion>
        </section>

        <Route
          path="/:api/:page/:section/:subsection/:card"
          component={CardCC}
        />

      </div>
    )
  }
}

export default Rationale;
