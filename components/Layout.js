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
                <Container>
                    <Head>
                        <title>{title}</title>
                    </Head>
                    <Row>
                        <Col>
                            <Navbar/>
                        </Col>
                    </Row>

                    {this.props.children}

                </Container>
                <Footer />
            </div>
        );
    }
}