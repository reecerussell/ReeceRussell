import React from "react";
import { Row, Col } from "reactstrap";
import Project from "../../components/project";

const Projects = props => (
    <Row id="projects" tag="section">
        <Col>
            <h3>{props.header}</h3>
            <div className="tab" />
            <Row>
                {props.children.map((proj, key) => (
                    <Col md="6" key={key}>
                        <Project {...proj} />
                    </Col>
                ))}
            </Row>
        </Col>
    </Row>
);

export default Projects;
