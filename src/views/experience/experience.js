import React from "react";
import { Row, Col } from "reactstrap";
import { Experience as Details } from "../../components";

const Experience = props => {
    const hasEducation = props.education !== undefined;
    const hasWork = props.work !== undefined;

    const getColSize = () => {
        const singleColumn = hasEducation !== hasWork;

        if (singleColumn) {
            return { size: "6", offset: "3" };
        } else {
            return { size: "6" };
        }
    };

    const getEducation = () => (
        <Col md={getColSize()}>
            <h3>{props.education.header}</h3>
            <div className="tab" />
            {props.education.children.map((exp, key) => (
                <Details {...exp} key={key} />
            ))}
        </Col>
    );

    const getWork = () => (
        <Col md={getColSize()}>
            <h3>{props.work.header}</h3>
            <div className="tab" />
            {props.work.children.map((exp, key) => (
                <Details {...exp} key={key} />
            ))}
        </Col>
    );

    return (
        <>
            <Row id="experience" tag="section">
                {getWork()}
                {getEducation()}
            </Row>
        </>
    );
};

export default Experience;
