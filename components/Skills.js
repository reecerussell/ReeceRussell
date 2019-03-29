import React from 'react';
import {Row, Col} from 'reactstrap';

export default class Skills extends React.Component {
    render () {
        return (
            <Row>
                <Col>
                    <h3>Skills</h3>
                    <div className="tab"></div>
                    <Row>
                        <Col md="4">
                            <h4>Frontend</h4>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS/SCSS</li>
                                <li>JavaScript</li>
                            </ul>
                        </Col>
                        <Col md="4">
                            <h4>Backend</h4>
                            <ul>
                                <li>C#.NET</li>
                                <li>MySQL/MSSQL</li>
                                <li>RESTFUL</li>
                            </ul>
                        </Col>
                        <Col md="4">
                            <h4>Other</h4>
                            <ul>
                                <li>Git</li>
                                <li>Xamarin &lt;3</li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}