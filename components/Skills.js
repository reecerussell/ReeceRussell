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
        console.log(this.state.skills)
        let content = this.state.skills.length > -1 ? (
            <Row tag="section">
                {/* {this.state.skills.map(skillSet => (
                    <Col md="4">
                        <h4>{skillSet.title}</h4>
                        <ul>
                            <li>ex</li>
                        </ul>
                    </Col>
                ))} */}
            </Row>
        ) : "";

        return (
            {content}
        )
    }
}