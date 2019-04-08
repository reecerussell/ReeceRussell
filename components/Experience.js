import React from 'react';
import {Row, Col} from 'reactstrap';
import '../static/css/experience.css';

export default class Experience extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            experience: props.experience === null ? [] : props.experience,
            education: props.education === null ? [] : props.education
        }
    }

    render() {

        let experience = this.state.experience.length > 0 ? (
            <Col md="6">
                <h3>Work</h3>
                <div className="tab"></div>
                {this.state.experience.map((exp, key) => (
                    <Row key={key}>
                        <Col>
                            <h4>{exp.title}</h4>
                            <p>
                                {exp.organisation}<br />
                                <span className="small text-muted">{exp.from} - {exp.to}</span>
                            </p>
                        </Col>
                    </Row>
                ))}
            </Col>
        ) : "";

        let education = this.state.education.length > 0 ? (
            <Col md="6">
                <h3>School</h3>
                <div className="tab"></div>
                {this.state.education.map((edu, key) => (
                    <Row key={key}>
                        <Col>
                            <h4>{edu.title}</h4>
                            <p>
                                {edu.organisation}<br />
                                <span className="small text-muted">{edu.from} - {edu.to}</span>
                            </p>
                        </Col>
                    </Row>
                ))}
            </Col>
        ) : "";

        return (
            <Row id="experience" tag="section">
                {experience}
                {education}
            </Row>
        )
    }
}