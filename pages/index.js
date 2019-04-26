import React from "react";
import Projects from "../components/Projects";
import Layout from "../components/Layout";
import { Row, Col } from "reactstrap";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import fetch from "isomorphic-unfetch";

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <Row id="intro" tag="section">
                    <Col md="8">
                        <h1 className="display-4">Hi,</h1>
                        <Row>
                            <Col md="7">
                                <p>
                                    Welcome to my portfolio! I am a software
                                    developer, based in Milton Keynes.
                                </p>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm="7">
                                <div className="tab" />
                                <p>
                                    Currently engaged to ASP.NET Core
                                    microservices and exploring GO.
                                    <br />
                                    This is my first online portfolio. Feel feel
                                    to look around and let me know what you
                                    think!
                                </p>
                            </Col>
                            <Col sm="5">
                                <div className="tab" />
                                <p>
                                    Just a side note, I am an apprentice
                                    software developer, working at{" "}
                                    <a href="http://prominentmedia.com">
                                        Prominent Media
                                    </a>
                                    .
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <About />
                <Skills skills={this.props.skills} />
                <Projects limit={2} projects={this.props.projects} />
                <Experience
                    experience={this.props.experience}
                    education={this.props.education}
                />
            </Layout>
        );
    }
}

Index.getInitialProps = async function() {
    const res = await fetch("https://go.reecerussell.com", {
        headers: {
            "Requested-By": "reecerussell.com",
        },
    });

    if (res.status != 200) throw new Error("Failed to get content");

    const data = await res.json();

    return data;
};

export default Index;
