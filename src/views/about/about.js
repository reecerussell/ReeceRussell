import React from "react";
import { Row, Col } from "reactstrap";

const About = props => (
    <Row id="about" tag="section">
        <Col>
            <h3>{props.header}</h3>
            <div className="tab" />
            <p className="text-justify">{props.content}</p>
        </Col>
    </Row>
);

export default About;
