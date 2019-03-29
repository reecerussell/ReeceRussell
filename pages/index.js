import React from 'react';
import Projects from '../components/Projects';
import Layout from '../components/Layout';
import {Row, Col} from 'reactstrap';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import Skills from '../components/Skills';

export default class Index extends React.Component {

    render() {
        return (
            <Layout>
                <Row style={{ padding: "75px 0", borderBottom: "dotted 1px #000" }}>
                    <Col md="4">
                        <img src="https://theweeklyminute.files.wordpress.com/2014/06/dsc05899.jpg" style={{ position: "relative", height: 300 }} />
                    </Col>
                    <Col md="8">
                        <h1 className="display-4">
                            Hi,
                            </h1>
                        <Row>
                            <Col md="7">
                                <p>
                                    Welcome to my portfoli! I am a software developer, based in Milton Keynes.
                                    </p>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm="7">
                                <div className="tab"></div>
                                <p>
                                    At the moment I am engaged to ASP.NET Core microservices and exploring GO.<br />
                                    This is my first online portfolio. Feel feel to look around and let me know what you think!
                                    </p>
                            </Col>
                            <Col sm="5">
                                <div className="tab"></div>
                                <p>Just a side note, I am an apprentice software developer, working at <a href="http://prominentmedia.com">Prominent Media</a>.</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <About />
                <Skills />
                <Testimonials />
                <Projects />
            </Layout>

        )
    }
}