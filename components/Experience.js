import React from 'react';
import {Row, Col} from 'reactstrap'

export default class Experience extends React.Component {
    render() {
        return (
            <Row style={{padding:"50px 0"}}>
                <Col md="6">
                    <h3>Work</h3>
                    <div className="tab"></div>
                    <Row>
                        <Col>
                            <h4>Apprentice Software Developer</h4>
                            <p>
                                Prominent Media<br />
                                <span className="small text-muted">2018 - DateTime.Now</span>
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col md="6">
                    <h3>School</h3>
                    <div className="tab"></div>
                    <Row>
                        <Col>
                            <h4>Software Language</h4>
                            <p>
                                Level 4 Diploma<br />
                                <span className="small text-muted">2018 - DateTime.Now</span>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4>Software Development Methodologies</h4>
                            <p>
                                Level 4 Diploma<br />
                                <span className="small text-muted">2018 - DateTime.Now</span>
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}