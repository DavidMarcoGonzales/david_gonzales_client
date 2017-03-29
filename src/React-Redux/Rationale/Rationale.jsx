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
                  <NavLink to="/api/Rationale/Restraint/Need/1">Reducing Need</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Rationale/Restraint/Model/1">Model</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Rationale/Restraint/Milieu/1">Therapeutic Milieu</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Rationale/Restraint/Children/1">Children</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Rationale/Restraint/Relationship/1">Therapeutic Relationship</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Rationale/Restraint/Quiz/1">Quiz</NavLink>
                </ListGroupItem>
              </ListGroup>
            </Panel>
            <Panel header="TCI Domains" eventKey="2">
              <ListGroup >
                <ListGroupItem >
                  <NavLink to="/api/Rationale/TCI/Model/1">Stress Model</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Rationale/TCI/Awareness/1">Self-Awareness</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Rationale/TCI/Child/1">Importance of Knowing the Child</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Rationale/TCI/Environment/1">Importance of the Environment</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Rationale/TCI/Skills/1">Importance of Skill Development</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Rationale/TCI/Quiz/1">Quiz</NavLink>
                </ListGroupItem>
              </ListGroup>
            </Panel>
            <Panel header="Therapeutic Milieu" eventKey="3">
              <ListGroup >
                <ListGroupItem >
                  <NavLink to="/api/Rationale/Milieu/Listening/1">Active Listening</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Rationale/Milieu/BehavioralSupport/1">Behavioral Support</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Rationale/Milieu/PowerStruggle/1">Power Struggles</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Rationale/Milieu/Quiz/1">Quiz</NavLink>
                </ListGroupItem>
              </ListGroup>
            </Panel>
            <Panel header="Children" eventKey="4">
              <ListGroup >
                <ListGroupItem >
                  <NavLink to="/api/Rationale/Children/Aggression/1">Aggressive Behavior</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Rationale/Children/NonVerbal/1">Non Verbal Communication</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/Rationale/Children/PotentialViolence/1">Potential Violence</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Rationale/Children/CoRegulation/1">Crisis Co-regulation</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Rationale/Children/LSI/1">Life Space Interview</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Rationale/Children/Quiz/1">Quiz</NavLink>
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
