import React from 'react';
import {Row, Col, Table} from 'reactstrap';
import '../static/css/projects.css';

export default class Projects extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <Row style={{padding: "50px 0"}}>
                <Col md="6">
                    <h4>Projects</h4>
                    <ul>
                        <li>Google</li>
                        <li>Microsoft</li>
                        <li>Apple</li>
                        <li>Amazon</li>
                    </ul>
                </Col>
                <Col md="6">
                    <h4>Experience</h4>
                    <ul className="list">
                        <li className="list-item">
                            <h5><b>Prominent Media</b></h5>
                        </li>
                    </ul>
                </Col>
                <Col md="6">
                    <h4>Education</h4>
                    <Row>
                        <Col sm="4">
                            <strong className="text-muted">2019 - PRESENT</strong>
                        </Col>
                        <Col sm="8">
                            <h4>
                                Software Language
                            </h4>
                            <span>
                                Level 4 Diploma
                            </span>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="4">
                            <strong className="text-muted">2019 - PRESENT</strong>
                        </Col>
                        <Col sm="8">
                            <h4>
                                Software Development Methodologies
                            </h4>
                            <span>
                                Level 4 Diploma
                            </span>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="4">
                            <strong className="text-muted">2019 - PRESENT</strong>
                        </Col>
                        <Col sm="8">
                            <h4>
                                Microsoft Technical Associate
                            </h4>
                            <span>
                                HTML5, CSS &amp; JS
                            </span>
                        </Col>
                    </Row>
                </Col>
                <Col md="6">
                    <h4>Skills</h4>
                    <Row>
                        <Col sm="4">
                            <h6>Frontend</h6>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS/SCSS</li>
                                <li>JavaScript</li>
                            </ul>
                        </Col>
                        <Col sm="4">
                            <h6>Backend</h6>
                            <ul>
                                <li>C#.NET</li>
                                <li>MySQL/MSSQL</li>
                                <li>RESTFUL</li>
                            </ul>
                        </Col>
                        <Col sm="4">
                            <h6>Other</h6>
                            <ul>
                                <li>Git</li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}