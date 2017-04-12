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
            <Panel header="1. Crisis Prevention" eventKey="1" style={{borderTop: '1px solid #333333', borderBottom: '1px solid black'}} >
              <div className="btn-group-vertical" style={{marginBottom: '0px', display: 'block' }}>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}} to="/api/Workbook/Prevention/Need/1">1.1 Reducing Need</NavLink>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}} to="/api/Workbook/Prevention/Model/1">1.2 Eliminating Need</NavLink>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}} to="/api/Workbook/Prevention/Milieu/1">1.3 Therapeutic Milieu</NavLink>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}} to="/api/Workbook/Prevention/Children/1">1.4 Children</NavLink>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}} to="/api/Workbook/Prevention/Relationship/1">1.5 Therapeutic Relationship</NavLink>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}} to="/api/Workbook/Prevention/Quiz/1">Quiz</NavLink>
              </div>
            </Panel>
            <Panel header="2. Crisis as Oppertunity" eventKey="2" style={{ borderTop: '1px solid #333333', borderBottom: '1px solid black' }}>
              <div className="btn-group-vertical" style={{marginBottom: '0px', display: 'block' }}>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}}  to="/api/Workbook/Opportunity/StressModel/1">2.1 Stress Model of Crisis</NavLink>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}}  to="/api/Workbook/Opportunity/SelfAwareness/1">2.2 Self-Awareness</NavLink>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}}  to="/api/Workbook/Opportunity/Child/1">2.3 Knowing the Child</NavLink>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}}  to="/api/Workbook/Opportunity/Environment/1">2.4 Environment</NavLink>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}}  to="/api/Workbook/Opportunity/Skills/1">2.5 Skill Development</NavLink>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}}  to="/api/Workbook/Opportunity/Quiz/1">Quiz</NavLink>
              </div>
            </Panel>
            <Panel header="3. De-Escalating the Crisis" eventKey="3" style={{borderTop: '1px solid #333333', borderBottom: '1px solid black'}} >
              <div className="btn-group-vertical" style={{marginBottom: '0px', display: 'block' }}>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}}  to="/api/Workbook/DeEscCrisis/Listening/1">3.1 Active Listening</NavLink>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}}  to="/api/Workbook/DeEscCrisis/BehavioralSupport/1">3.2 Behavioral Support</NavLink>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}}  to="/api/Workbook/DeEscCrisis/CoRegEmFirstAid/1">3.3 Co-Reg/Emotional First Aid</NavLink>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}}  to="/api/Workbook/DeEscCrisis/ConflictCycle/1">3.4 Conflict Cycle</NavLink>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}}  to="/api/Workbook/DeEscCrisis/Quiz/1">Quiz</NavLink>
              </div>
            </Panel>
            <Panel header="4. Managing Crisis" eventKey="4" style={{borderTop: '1px solid #333333', borderBottom: '1px solid black' }}>
              <div className="btn-group-vertical" style={{marginBottom: '0px', display: 'block' }}>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}}  to="/api/Workbook/ManageCrisis/Aggression/1">4.1 Aggressive Behavior</NavLink>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}}  to="/api/Workbook/ManageCrisis/NonVerbal/1">4.2 Non Verbal Communication</NavLink>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}}  to="/api/Workbook/ManageCrisis/PotentialViolence/1">4.3 Potential Violence</NavLink>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}}  to="/api/Workbook/ManageCrisis/CoRegulation/1">4.4 Crisis Co-regulation</NavLink>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}}  to="/api/Workbook/ManageCrisis/LSI/1">4.5 Life Space Interview</NavLink>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}}  to="/api/Workbook/ManageCrisis/Quiz/1">Quiz</NavLink>
              </div>
            </Panel>
            <Panel header="5. Safety Intervention" eventKey="5" style={{borderTop: '1px solid #333333', borderBottom: '1px solid black' }}>
              <div className="btn-group-vertical" style={{marginBottom: '0px', display: 'block' }}>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}}  to="/api/Workbook/Safety/Intervention/1">5.1 Choosing an Intervention</NavLink>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}}  to="/api/Workbook/Safety/SafetyConcerns/1">5.2 Safety Concerns</NavLink>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}}  to="/api/Workbook/Safety/Documentation/1">5.3 Documentation</NavLink>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}}  to="/api/Workbook/Safety/Recovery/1">5.4 Recovery</NavLink>
                <NavLink className="btn btn-default btn-sm btn-block" style={{ textAlign: 'left'}}  to="/api/Workbook/Safety/Recovery/1">Quiz</NavLink>
              </div>
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
