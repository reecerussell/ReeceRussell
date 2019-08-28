import React from "react";
import { Row, Col } from "reactstrap";

const Intro = props => (
    <Row id="intro" tag="section">
        <Col md="8">
            <h1 className="display-4">{props.greeting},</h1>
            <Row>
                <Col md="7">
                    <p>{props.tagLine}</p>
                </Col>
            </Row>

            <Row>
                <Col sm="7">
                    <div className="tab" />
                    <p dangerouslySetInnerHTML={{ __html: props.mainNote }} />
                </Col>
                <Col sm="5">
                    <div className="tab" />
                    <p dangerouslySetInnerHTML={{ __html: props.sideNote }} />
                </Col>
            </Row>
        </Col>
    </Row>
);

export default Intro;
