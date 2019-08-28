import React from "react";
import { Row, Col } from "reactstrap";
import Skill from "../../components/skill";

const Skills = props => {
    return (
        <Row tag="section">
            <Col>
                <h3>{props.header}</h3>
                <div className="tab" />
                <Row>
                    {props.children.map((skill, key) => (
                        <Col md="4" key={key}>
                            <Skill {...skill} />
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    );
};

export default Skills;
