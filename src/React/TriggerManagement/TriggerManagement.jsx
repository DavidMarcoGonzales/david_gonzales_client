/**
 * Created by David on 10/27/2016.
 */
import { Route, NavLink } from "react-router-dom";
import React from "react";
import { Accordion, Panel } from "react-bootstrap";
import VidCard from "../VidCard/VidCard";
const actStyle = { color: '#2780E3' };

class TriggerManagement extends React.Component {
  render() {
    const navLinkFormatting = "btn btn-default btn-sm btn-block";
    const navLinkStyle = { textAlign: 'left' };
    return (
      <div>
        <section className="col-md-3" style={{ paddingLeft: '0px', paddingRight: '0px', height: '100%' }} >
          <Accordion >
            <Panel header="Introduction" eventKey="1" style={{ borderTop: '1px solid #333333', borderBottom: '1px solid black' }} >
              <div className="btn-group-vertical" style={{ marginBottom: '0px', display: 'block' }}>
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/TriggerManagement/Introduction/Need">Why</NavLink> {/* */}
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/TriggerManagement/Introduction/Model">Key Concepts</NavLink> {/* Will not change if not listened to. model behavior, Kindness, Empathy, Equanimity,  */}
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/TriggerManagement/Introduction/Milieu">Likability</NavLink>  {/* Well liked, they will model the person they like, try to please*/}
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/TriggerManagement/Introduction/Milieu">Modeling Behavior</NavLink>  {/*We model everyday, all day,  Don't tell, show by modeling, */}
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/TriggerManagement/Introduction/Milieu">Personal Development</NavLink>  {/*Model Everyday */}

              </div>
            </Panel>
            <Panel header="Trauma Informed Care" eventKey="2" style={{ borderTop: '1px solid #333333', borderBottom: '1px solid black' }}>
              <div className="btn-group-vertical" style={{ marginBottom: '0px', display: 'block' }}>
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/TriggerManagement/TIC/Child">Self and Co-Regulation</NavLink>  {/* Adults need co-regulation why withhold from child? Self Regulation coping skill, parent hugs and cares for baby, calms crying, this becomes self regulation. */}
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/TriggerManagement/TIC/StressModel">Developmental trauma</NavLink>  {/* Developmental trauma,  */}
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/TriggerManagement/TIC/StressModel">Pain</NavLink>  {/* Racism, Sexism, powerlessness, Lack of acknowlegment, worthlessness, helplessness, deformed self-identity, low self esteme, distorted core identity, shame, suicidal ideations, homocidal ideations, shame, guilt, disociation,  intrusive thoughts, */}
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/TriggerManagement/TIC/Skills">Pain-Based Behavior</NavLink>  {/* Emotional Disregulation, Fight, Flight, Freeze, Fawn, Fidget, faint, Rage, Anxiety, Shame, Inability to Self-regulate, Explosive, Re-enact Trauma, Transferred Agression, isolation, hypervigilance, inability to trust, Self Harm, Denial, High-Risk Behavior,  Denial High Risk Behavior Lack or little "normal" non-trauma identity Difficulty working closely/well with others*/}
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/TriggerManagement/TIC/Environment">What not to do</NavLink>  {/*  Avoid Consequence Stacking, Avoid Ultimatums, Emotional Invalidation, Victim Shaming, Shame Shifting, trivialize trauma, minimize trauma, gaslight trauma, */}
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/TriggerManagement/TIC/Environment">When it Ends</NavLink>  {/*  Life long, like a scar, used as a motivator, becomes anger, helps as greed, control, never ends */}
              </div>
            </Panel>

            <Panel header="Stress Model" eventKey="7" style={{ borderTop: '1px solid #333333', borderBottom: '1px solid black' }}>
              <div className="btn-group-vertical" style={{ marginBottom: '0px', display: 'block' }}>
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/Workbook/Eleviating/Intervention">Baseline</NavLink>  {/* ICMP, */}
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/Workbook/Eleviating/Intervention">Missing Co-regulation</NavLink>  {/* */}
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/Workbook/Eleviating/SafetyConcerns">Trigger</NavLink>  {/* Personal Setting Conditions, Environmental Setting Conditions*/}
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/Workbook/Eleviating/Documentation">Agitated</NavLink>  {/* Lack Coping Skills, A cry for help, I need someting but don't know to get it.*/}
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/Workbook/Eleviating/Recovery">Aggressive</NavLink>  {/* */}
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/Workbook/Eleviating/Recovery">Outburst</NavLink>  {/* Signals - Loss of Coping, yelling, withdrawing, demanding, destroying property, */}
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/Workbook/Eleviating/Recovery">Crisis</NavLink>  {/* crisis change in their behavior indicating that the child or young person may be running out of effective, rational, and constructive ways of coping with the situation, This is a cry for help , means having exhausted or never having learned effective, constructive, and rational ways of coping with stress, upset, or pain. */}
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/Workbook/Eleviating/Recovery">Teach Coping Skills</NavLink>  {/* EMDR, DBT, Art Therapy, Music Therapy, Touch Therapy, Bonding Therapy, Emotional Focus Therapy, Person Centered Therapy, Gestalt Therapy, Systemic Therapy, Attachment Therapy, Video Therapy, Biblio therapy, journaling, */}
              </div>
            </Panel>

            <Panel header="Sanctuary" eventKey="3" style={{ borderTop: '1px solid #333333', borderBottom: '1px solid black' }} >
              <div className="btn-group-vertical" style={{ marginBottom: '0px', display: 'block' }}>
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/TriggerManagement/Sanctuary/Listening">Motivation</NavLink>  {/* Replace directives with, Prompt, procedure, routine, habit*/}
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/TriggerManagement/Sanctuary/BehavioralSupport">Visual Prompt Aids</NavLink>  {/* Replace directives with Visual Reminders time to do homework, how room should look, when to shower, */}
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/TriggerManagement/Sanctuary/CoRegEmFirstAid">Visual over Verbal</NavLink>  {/* Replace verbal directives with Body language, raised eyebrows. Wink, thumbs up, looking to direct*/}
              </div>
            </Panel>
            <Panel header="Eleviating Trauma" eventKey="5" style={{ borderTop: '1px solid #333333', borderBottom: '1px solid black' }}>
              <div className="btn-group-vertical" style={{ marginBottom: '0px', display: 'block' }}>
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/Workbook/Eleviating/Intervention">5.1 Choosing an Intervention</NavLink>  {/*Gentle reminders, encouragement, and support, Must intervene as early as possible, As emotion increases, cognition decreases */}
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/Workbook/Eleviating/SafetyConcerns">5.2 Safety Concerns</NavLink>  {/* */}
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/Workbook/Eleviating/Documentation">5.3 Documentation</NavLink>  {/* */}
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/Workbook/Eleviating/Recovery">5.4 Recovery</NavLink>  {/* */}
              </div>
            </Panel>
            <Panel header="Maintaining Sanctuary" eventKey="4" style={{ borderTop: '1px solid #333333', borderBottom: '1px solid black' }}>
              <div className="btn-group-vertical" style={{ marginBottom: '0px', display: 'block' }}>
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/TriggerManagement/Maintaining/Aggression">Intervention</NavLink>  {/* (a) To provide immediate emotional and environmental support in a way that reduces the stress and risk, and (b) To teach better, more constructive, effective ways to deal with stress or painful feelings that occur in the future. first emotional support,then  behavioral support to reduce the stress and pain of the situation, */}
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/TriggerManagement/Maintaining/NonVerbal">4.2 Non Verbal Communication</NavLink>  {/* */}
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/TriggerManagement/Maintaining/PotentialViolence">4.3 Potential Violence</NavLink>  {/* */}
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/TriggerManagement/Maintaining/CoRegulation">4.4 Crisis Co-regulation</NavLink>  {/* */}
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/TriggerManagement/Maintaining/LSI">4.5 Life Space Interview</NavLink>  {/* */}
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/TriggerManagement/Sanctuary/ConflictCycle">Manage Toxic People</NavLink>  {/* Narcissistics,  */}
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/TriggerManagement/Sanctuary/ConflictCycle">Manage Environment</NavLink>  {/* */}
              </div>
            </Panel>
            <Panel header="Worst Practices" eventKey="6" style={{ borderTop: '1px solid #333333', borderBottom: '1px solid black' }}>
              <div className="btn-group-vertical" style={{ marginBottom: '0px', display: 'block' }}>
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/Workbook/Eleviating/Intervention">Expediency</NavLink>  {/* */}
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/Workbook/Eleviating/SafetyConcerns">Operant Conditioning</NavLink>  {/* */}
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/Workbook/Eleviating/Documentation">Forced Compliance</NavLink>  {/* */}
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/Workbook/Eleviating/Recovery">Negative Expectations</NavLink>  {/* */}
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/Workbook/Eleviating/Recovery">Boundries as Control</NavLink>  {/* */}
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/Workbook/Eleviating/Recovery">Sarcasm</NavLink>  {/* */}
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/Workbook/Eleviating/Recovery">Authoritarian Control</NavLink>  {/* Staff/guardian Splitting in favor of forced compliance, Expediency, Forced Compliance, Any best practice as control, authoritarian control, us-against-them, staff splitting, Sarcasm, Boundries as Control, Negative Expectations, Operant Conditioning*/}
              </div>
            </Panel>
            <Panel header="Alleviate Pain" eventKey="8" style={{ borderTop: '1px solid #333333', borderBottom: '1px solid black' }}>
              <div className="btn-group-vertical" style={{ marginBottom: '0px', display: 'block' }}>
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/Workbook/Eleviating/Intervention">Baseline</NavLink>  {/* */}
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/Workbook/Eleviating/Intervention">Missing Co-regulation</NavLink>  {/* */}
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/Workbook/Eleviating/SafetyConcerns">Trigger</NavLink>  {/* Boredom, Personal Setting Conditions, Environmental Setting Conditions*/}
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/Workbook/Eleviating/Documentation">Agitated</NavLink>  {/* Lack Coping Skills, A cry for help, I need someting but don't know to get it.*/}
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/Workbook/Eleviating/Recovery">Aggressive</NavLink>  {/* */}
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/Workbook/Eleviating/Recovery">Outburst</NavLink>  {/* */}
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/Workbook/Eleviating/Recovery">Crisis</NavLink>  {/* */}
                <NavLink activeStyle={actStyle} className={navLinkFormatting} style={navLinkStyle} to="/api/Workbook/Eleviating/Recovery">Teach Coping Skills</NavLink>  {/* Mindfulness, Grounding Self, EMDR, DBT, Art Therapy, Music Therapy, Touch Therapy, Bonding Therapy, Emotional Focus Therapy, Person Centered Therapy, Gestalt Therapy, Systemic Therapy, Attachment Therapy, Video Therapy, Biblio therapy, journaling, Acceptance */}
              </div>
            </Panel>
          </Accordion>
        </section>

        <Route
          path="/:api/:page/:section/:subsection/:card?"
          component={VidCard}
        />

      </div>
    )
  }
}

export default TriggerManagement;
