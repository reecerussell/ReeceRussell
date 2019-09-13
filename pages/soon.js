import { Row, Col } from "reactstrap";
import Layout from "../src/containers/Layout";

const Soon = _ => (
    <Layout path="/stack" title="Stack">
        <Row tag="section" className="justify-content-center text-center">
            <Col md="6">
                <h1>COMING SOON</h1>
                <p>I'm in the process of writing this page.</p>
                <p>
                    Click <a href="/">here</a> to go back.
                </p>
            </Col>
        </Row>
    </Layout>
);

export default Soon;
