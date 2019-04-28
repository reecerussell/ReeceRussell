import React from "react";
import { Row, Col } from "reactstrap";

const Skills = props => {
    let content =
        props.skills !== null ? (
            <Row tag="section">
                <Col>
                    <h3>Technical skills</h3>
                    <div className="tab" />
                    <Row>
                        {props.skills.map((skillSet, key1) => (
                            <Col md="4" key={key1}>
                                <h4>{skillSet.title}</h4>
                                <ul>
                                    {skillSet.skills.map((skill, key2) => (
                                        <li key={key2}>{skill.skill}</li>
                                    ))}
                                </ul>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        ) : (
            ""
        );

    return content;
};

export default Skills;
