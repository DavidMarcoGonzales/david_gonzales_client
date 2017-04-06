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
            <Panel header="Crisis Prevention" eventKey="1">
              <ListGroup >
                <ListGroupItem >
                  <NavLink to="/api/Workbook/Prevention/Need/1">Reducing Need</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Workbook/Prevention/Model/1">Model</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Workbook/Prevention/Milieu/1">Therapeutic Milieu</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Workbook/Prevention/Children/1">Children</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Workbook/Prevention/Relationship/1">Therapeutic Relationship</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Workbook/Prevention/Quiz/1">Quiz</NavLink>
                </ListGroupItem>
              </ListGroup>
            </Panel>
            <Panel header="TCI Domains" eventKey="2">
              <ListGroup >
                <ListGroupItem >
                  <NavLink to="/api/Workbook/TCI/Model/1">Stress Model</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Workbook/TCI/Awareness/1">Self-Awareness</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Workbook/TCI/Child/1">Importance of Knowing the Child</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Workbook/TCI/Environment/1">Importance of the Environment</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Workbook/TCI/Skills/1">Importance of Skill Development</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Workbook/TCI/Quiz/1">Quiz</NavLink>
                </ListGroupItem>
              </ListGroup>
            </Panel>
            <Panel header="Therapeutic Milieu" eventKey="3">
              <ListGroup >
                <ListGroupItem >
                  <NavLink to="/api/Workbook/Milieu/Listening/1">Active Listening</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Workbook/Milieu/BehavioralSupport/1">Behavioral Support</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Workbook/Milieu/PowerStruggle/1">Power Struggles</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Workbook/Milieu/Quiz/1">Quiz</NavLink>
                </ListGroupItem>
              </ListGroup>
            </Panel>
            <Panel header="Children" eventKey="4">
              <ListGroup >
                <ListGroupItem >
                  <NavLink to="/api/Workbook/Children/Aggression/1">Aggressive Behavior</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Workbook/Children/NonVerbal/1">Non Verbal Communication</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Workbook/Children/PotentialViolence/1">Potential Violence</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Workbook/Children/CoRegulation/1">Crisis Co-regulation</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Workbook/Children/LSI/1">Life Space Interview</NavLink>
                </ListGroupItem>
                <ListGroupItem >
                  <NavLink to="/api/Workbook/Children/Quiz/1">Quiz</NavLink>
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
