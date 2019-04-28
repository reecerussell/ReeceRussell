import React from "react";
import { Row, Col } from "reactstrap";
import "../static/css/experience.css";

const Experience = props => {
    let experience =
        props.experience !== null ? (
            <Col md="6">
                <h3>Work</h3>
                <div className="tab" />
                {this.state.experience.map((exp, key) => (
                    <Row key={key}>
                        <Col>
                            <h4>{exp.title}</h4>
                            <p>
                                {exp.organisation}
                                <br />
                                <span className="small text-muted">
                                    {exp.from} - {exp.to}
                                </span>
                            </p>
                        </Col>
                    </Row>
                ))}
            </Col>
        ) : (
            ""
        );

    let education =
        props.experience !== null ? (
            <Col md="6">
                <h3>School</h3>
                <div className="tab" />
                {this.state.education.map((edu, key) => (
                    <Row key={key}>
                        <Col>
                            <h4>{edu.title}</h4>
                            <p>
                                {edu.organisation}
                                <br />
                                <span className="small text-muted">
                                    {edu.from} - {edu.to}
                                </span>
                            </p>
                        </Col>
                    </Row>
                ))}
            </Col>
        ) : (
            ""
        );

    const hasContent = props.experience !== null && props.education !== null;

    return hasContent ? (
        <Row id="experience" tag="section">
            {experience}
            {education}
        </Row>
    ) : (
        ""
    );
};

export default Experience;
