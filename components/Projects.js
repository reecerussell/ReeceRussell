import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'reactstrap';
import '../static/css/projects.css';
import goreact from "../static/images/goreact.jpg";

class Projects extends React.Component {
    constructor(props) {
        super(props);

        let projects = [];
        for (let i = 0; i < Math.min(props.limit, props.projects.length); i++) {
            projects.push(props.projects[i]);
        }

        this.state = {
            hasProjects: projects != [] && projects.length > 0,
            projects: projects
        }
    }

    render () {

        const content = this.state.hasProjects ? (
            <Row id="projects" tag="section">
                <Col>
                <h3>Projects</h3>
                <div className="tab"></div>
                    <Row>
                        {this.state.projects.map((proj, key) => (
                        <Col md="6" key={key}>
                            <Row>
                                <Col sm="6">
                                    <img src={goreact} style={{width:"100%", maxHeight:"300px"}} />
                                </Col>
                                <Col sm="6" className="project-details">
                                    <h4>{proj.name}</h4>
                                    <p>{proj.description.replace("\n", "<br />")}</p>
                                    <p>
                                        <a href={proj.githubLink} className="btn-source">View Source</a>
                                        <span> <a href={"/project/" + proj.id + "/" + proj.name.replace(" ", "-")} className="more">more</a></span>
                                    </p>
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

Projects.defaultProps = {
    limit: 10,
    projects: []
}

Projects.propTypes = {
    limit: PropTypes.number,
    projects: PropTypes.array.isRequired
}

export default Projects;