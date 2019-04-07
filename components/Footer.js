import React from 'react';
import {Row, Col} from 'reactstrap';
import '../static/css/footer.css';

export default class Footer extends React.Component {
    render () {
        return (
            <footer className="container">
                <Row>
                    <Col md="6">
                        <p>
                            Copyright &copy; {new Date().getFullYear()}, Reece&nbsp;Russell
                        </p>
                    </Col>
                    <Col md="6">
                        <p className="email">
                            <a href="mailto:me@reece-russell.co.uk?Subject=Talk%20to%20me">me@reece-russell.co.uk</a>
                        </p>
                    </Col>
                </Row>
            </footer>
        )
    }
}