import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/css/index.css';
import { Container, Row, Col } from 'reactstrap';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

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
                <script>
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments)}
                    gtag('js', new Date());

                    gtag('config', 'UA-103830912-1');
                </script>
            </div>
        );
    }
}