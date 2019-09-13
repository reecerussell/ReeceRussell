import React from "react";
import { Row, Col } from "reactstrap";
import Modal from "./modal";

class Project extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayModal: false,
        };
    }

    toggleModal = e => {
        if (e) {
            e.preventDefault();
        }

        this.setState(prevState => ({ displayModal: !prevState.displayModal }));
    };

    render() {
        const { name, teaser, imageUrl, githubUrl } = this.props;

        return (
            <>
                <Modal
                    isOpen={this.state.displayModal}
                    toggle={this.toggleModal}
                    {...this.props}
                />
                <Row>
                    <Col sm="6">
                        <img
                            src={imageUrl}
                            style={{
                                width: "100%",
                                maxHeight: "300px",
                            }}
                        />
                    </Col>
                    <Col sm="6" className="project-details">
                        <h4>{name}</h4>
                        <p>{teaser.replace("\n", "<br />")}</p>
                        <p>
                            <a href={githubUrl} className="btn-source">
                                View Source
                            </a>
                            <span>
                                {" "}
                                <a
                                    href="#"
                                    className="more"
                                    onClick={this.toggleModal}
                                >
                                    more
                                </a>
                            </span>
                        </p>
                    </Col>
                </Row>
            </>
        );
    }
}

export default Project;
