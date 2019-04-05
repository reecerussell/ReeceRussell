import React from 'react';
import {Row, Col} from 'reactstrap';
import '../static/css/projects.css';

export default class Projects extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        
        const hasProjects = this.props.projects != null && 
                            this.props.projects.length > 0 &&
                            this.props.projects != undefined;

        const content = hasProjects ? (
            <Row id="projects" style={{borderTop:"1px black dotted", borderBottom:"1px black dotted", padding: "50px 0"}}>
                <Col>
                <h3>Projects</h3>
                <div className="tab"></div>
                    <Row>
                        {this.props.projects.map((proj, key) => (
                        <Col md="6" key={key}>
                            <Row>
                                <Col sm="6">
                                    <img src={proj.imageUrl} style={{width:"100%", maxHeight:"300px"}} />
                                </Col>
                                <Col sm="6">
                                    <h4>{proj.name}</h4>
                                    <p>{proj.description.replace("\n", "<br />")}</p>
                                    <a href={proj.githubLink} className="btn-source">View Source</a>
                                </Col>
                            </Row>
                        </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        ) : ""

        return (content);
    }
}