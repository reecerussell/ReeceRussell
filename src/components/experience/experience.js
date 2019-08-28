import React from "react";
import { Row, Col } from "reactstrap";

const Experience = props => (
    <Row>
        <Col>
            <h4>{props.title}</h4>
            <p>
                {props.organisation}
                <br />
                <span className="small text-muted">
                    {props.from} - {props.to}
                </span>
            </p>
        </Col>
    </Row>
);

export default Experience;
