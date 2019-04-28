import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";
import "../static/css/projects.css";

class Projects extends React.Component {
    constructor(props) {
        super(props);

        let projects = [];
        const projectCount =
            props.projects === null ? 0 : props.projects.length;
        for (let i = 0; i < Math.min(props.limit, projectCount); i++) {
            projects.push(props.projects[i]);
        }

        this.state = {
            hasProjects: projects != [] && projects.length > 0,
            projects: projects,
        };
    }

    render() {
        const content = this.state.hasProjects ? (
            <Row id="projects" tag="section">
                <Col>
                    <h3>Projects</h3>
                    <div className="tab" />
                    <Row>
                        {this.state.projects.map((proj, key) => (
                            <Col md="6" key={key}>
                                <Row>
                                    <Col sm="6">
                                        <img
                                            src={proj.imageUrl}
                                            style={{
                                                width: "100%",
                                                maxHeight: "300px",
                                            }}
                                        />
                                    </Col>
                                    <Col sm="6" className="project-details">
                                        <h4>{proj.name}</h4>
                                        <p>
                                            {proj.teaser.replace(
                                                "\n",
                                                "<br />"
                                            )}
                                        </p>
                                        <p>
                                            <a
                                                href={proj.githubLink}
                                                className="btn-source"
                                            >
                                                View Source
                                            </a>
                                            <span>
                                                {" "}
                                                <a
                                                    href={
                                                        "/project/" +
                                                        proj.id +
                                                        "/" +
                                                        proj.name.replace(
                                                            " ",
                                                            "-"
                                                        )
                                                    }
                                                    className="more"
                                                >
                                                    more
                                                </a>
                                            </span>
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        ) : (
            ""
        );

        return content;
    }
}

Projects.defaultProps = {
    limit: 10,
    projects: [],
};

Projects.propTypes = {
    limit: PropTypes.number,
    projects: PropTypes.array,
};

export default Projects;
