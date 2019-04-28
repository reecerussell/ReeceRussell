import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/css/index.css';
import { Container, Row, Col } from 'reactstrap';
import Head from 'next/head';
import { NextScript } from 'next/document'
import Navbar from './Navbar';
import Footer from './Footer';
import googleAnalytics from '../static/js/googleAnalytics'

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
    
        this.getTitle = this.getTitle.bind(this);
    }

    getTitle() {
        var title = this.props.title;

        switch(title) {
            case "":
            case null:
            case undefined:
                return "Reece Russell / Software Developer";
            default:
                return title + " / Reece Russell / Software Developer";
        }
    }

    componentDidMount() {
        const script = document.createElement("script");

        script.src = "https://use.typekit.net/foobar.js";
        script.async = true;
    
        document.body.appendChild(script);
    }

    render () {
        const title = this.getTitle();

        return (
            <div className="background">
                <Container tag="header">
                    <Row>
                        <Col>
                            <Navbar/>
                        </Col>
                    </Row>
                </Container>
                <Container tag="main">
                    <Head>
                        <title>{title}</title>
                    </Head>

                    {this.props.children}

                </Container>
                <Footer />
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-103830912-1"></script>
                <script src={googleAnalytics}></script>
                <NextScript />
            </div>
        );
    }
}