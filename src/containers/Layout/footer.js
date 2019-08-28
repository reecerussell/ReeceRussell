import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = props => (
    <Container tag="footer">
        <Row>
            <Col md="6">
                <p dangerouslySetInnerHTML={{ __html: props.copyright }} />
            </Col>
            <Col md="6">
                <p className="email">
                    <a href={`mailto:${props.email}?Subject=Talk%20to%20me`}>
                        {props.email}
                    </a>
                </p>
            </Col>
        </Row>
    </Container>
);

export default Footer;
