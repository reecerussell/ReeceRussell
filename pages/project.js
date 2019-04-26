import React from "react";
import { Row, Col } from "reactstrap";
import Layout from "../components/Layout";
import "../static/css/projects.css";
import fetch from "isomorphic-unfetch";
import Error from "next/error";

class Project extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.hasProject) return <Error statusCode={404} />;

        let descriptionParagraphs = [];
        const descriptionArr = this.props.project.description.split("\n");

        for (let i = 0; i < descriptionArr.length; i++) {
            let paragraph = descriptionArr[i];

            if (paragraph === "") continue;

            descriptionParagraphs.push(paragraph);
        }

        return (
            <Layout title={this.props.project.name}>
                <Row id="project">
                    <Col md={{ offset: "3", size: "6" }}>
                        <img
                            src={this.props.project.imageUrl}
                            alt={this.props.project.name}
                        />

                        <div className="text-center">
                            <h1>{this.props.project.name}</h1>
                            <p>
                                <a
                                    href={this.props.project.githubLink}
                                    className="btn-source"
                                >
                                    View Source
                                </a>
                            </p>
                        </div>
                        <div className="text-justify" id="projectDescription">
                            {descriptionParagraphs.map((description, key) => (
                                <p key={key}>{description}</p>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Layout>
        );
    }
}

Project.getInitialProps = async function({ res, query }) {
    const data = await fetch(
        "https://go.reecerussell.com/api/project/" + query.id
    );

    if (data.status != 200) {
        res.statusCode = 404;
        return {
            hasProject: false,
        };
    }

    const proj = await data.json();

    let hasProject = true;

    if (proj === null) {
        hasProject = false;
    } else {
        hasProject =
            query.slug.toLowerCase() ==
            proj.name.toLowerCase().replace(" ", "-");
    }

    if (!hasProject) res.statusCode = 404;

    return {
        project: proj,
        query: query,
        hasProject: hasProject,
    };
};

export default Project;
