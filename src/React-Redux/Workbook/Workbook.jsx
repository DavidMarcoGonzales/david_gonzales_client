/**
 * Created by David on 10/27/2016.
 */
import { Route, NavLink } from "react-router-dom";
import React from "react";
import { Accordion, Panel } from "react-bootstrap";
import CardCC from "../Card/CardCC";

class Rationale extends React.Component {
  render() {
    return (
      <div>
        <section className="col-md-3" style={{ paddingLeft: '0px', paddingRight: '0px', height:'100%'}} >
          <Accordion >
            <Panel header="Crisis Prevention" eventKey="1" style={{borderTop: '1px solid #333333', borderBottom: '1px solid black'}} >
              <div className="btn-group-vertical" style={{marginBottom: '0px', display: 'block' }}>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}} to="/api/Workbook/Prevention/Need/1">Reducing Need</NavLink>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}} to="/api/Workbook/Prevention/Milieu/1">Therapeutic Milieu</NavLink>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}} to="/api/Workbook/Prevention/Children/1">Children</NavLink>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}} to="/api/Workbook/Prevention/Model/1">Model</NavLink>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}} to="/api/Workbook/Prevention/Relationship/1">Therapeutic Relationship</NavLink>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}} to="/api/Workbook/Prevention/Quiz/1">Quiz</NavLink>
              </div>
            </Panel>
            <Panel header="TCI Domains" eventKey="2" style={{ borderTop: '1px solid #333333', borderBottom: '1px solid black' }}>
              <div className="btn-group-vertical" style={{marginBottom: '0px', display: 'block' }}>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}}  to="/api/Workbook/TCI/Awareness/1">Self-Awareness</NavLink>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}}  to="/api/Workbook/TCI/Model/1">Stress Model</NavLink>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}}  to="/api/Workbook/TCI/Child/1">Importance of Knowing the Child</NavLink>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}}  to="/api/Workbook/TCI/Environment/1">Importance of the Environment</NavLink>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}}  to="/api/Workbook/TCI/Skills/1">Importance of Skill Development</NavLink>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}}  to="/api/Workbook/TCI/Quiz/1">Quiz</NavLink>
              </div>
            </Panel>
            <Panel header="Therapeutic Milieu" eventKey="3" style={{borderTop: '1px solid #333333', borderBottom: '1px solid black'}} >
              <div className="btn-group-vertical" style={{marginBottom: '0px', display: 'block' }}>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}}  to="/api/Workbook/Milieu/Listening/1">Active Listening</NavLink>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}}  to="/api/Workbook/Milieu/BehavioralSupport/1">Behavioral Support</NavLink>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}}  to="/api/Workbook/Milieu/PowerStruggle/1">Power Struggles</NavLink>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}}  to="/api/Workbook/Milieu/Quiz/1">Quiz</NavLink>
              </div>
            </Panel>
            <Panel header="Children" eventKey="4" style={{borderTop: '1px solid #333333', borderBottom: '1px solid black' }}>
              <div className="btn-group-vertical" style={{marginBottom: '0px', display: 'block' }}>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}}  to="/api/Workbook/Children/Aggression/1">Aggressive Behavior</NavLink>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}}  to="/api/Workbook/Children/NonVerbal/1">Non Verbal Communication</NavLink>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}}  to="/api/Workbook/Children/PotentialViolence/1">Potential Violence</NavLink>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}}  to="/api/Workbook/Children/CoRegulation/1">Crisis Co-regulation</NavLink>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}}  to="/api/Workbook/Children/LSI/1">Life Space Interview</NavLink>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}}  to="/api/Workbook/Children/Quiz/1">Quiz</NavLink>
              </div>
            </Panel>
            <Panel header="Therapeutic Relationship" eventKey="5" style={{borderTop: '1px solid #333333', borderBottom: '1px solid black' }}>
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
