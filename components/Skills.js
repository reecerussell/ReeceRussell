import React from 'react';
import {Row, Col} from 'reactstrap';

export default class Skills extends React.Component {
    constructor(props) {
        super (props);

        this.state = {
            skills: props.skills === null ? [] : props.skills
        }
    }

    renderChildren(skills) {
        {skills.map((skill) => (
            <li>{skill.skill}</li>
        ))}
    }

    render () {
        let content = this.state.skills.length > -1 ? (
            <Row tag="section">
                <Col>
                    <h3>Technical skills</h3>
                    <div className="tab"></div>
                    <Row>
                        {this.state.skills.map((skillSet, key1) => (
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
        ) : "";

        return content;
    }
}