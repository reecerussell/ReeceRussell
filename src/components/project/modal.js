import React from "react";
import {
    Button,
    Modal as BootstrapModal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "reactstrap";
import PropTypes from "prop-types";

const defaultProps = {
    isOpen: false,
};
const propTypes = {
    isOpen: PropTypes.bool,
    toggle: PropTypes.func,
};

class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BootstrapModal
                isOpen={this.props.isOpen}
                toggle={this.props.toggle}
                className={this.props.className}
            >
                <ModalHeader toggle={this.props.toggle}>
                    {this.props.name}
                </ModalHeader>
                <ModalBody>
                    <img
                        src={this.props.imageUrl}
                        style={{
                            width: "100%",
                        }}
                    />
                    <div
                        dangerouslySetInnerHTML={{
                            __html: this.props.description,
                        }}
                    />
                </ModalBody>
            </BootstrapModal>
        );
    }
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
