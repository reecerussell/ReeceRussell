import React from "react";
import Modal from "./modal";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";

//import { DevIcon } from "./icon";

library.add(faStar);

const defaultProps = {
    name: "Untitled Skill",
    stars: 0,
    icon: "",
    description: "This a generic skill.",
};
const propTypes = {
    name: PropTypes.string,
    stars: PropTypes.number,
    icon: PropTypes.string,
    description: PropTypes.string,
};

class Skill extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayModal: false,
        };
    }

    toggleModal = () => {
        this.setState(prevState => ({ displayModal: !prevState.displayModal }));
    };

    handleToggle = e => {
        e.preventDefault();
        this.toggleModal();
    };

    getStars = stars => {
        const isChecked = n => (stars >= n ? "checked" : "");

        return (
            <>
                <FontAwesomeIcon icon="star" className={isChecked(1)} />
                <FontAwesomeIcon icon="star" className={isChecked(2)} />
                <FontAwesomeIcon icon="star" className={isChecked(3)} />
                <FontAwesomeIcon icon="star" className={isChecked(4)} />
                <FontAwesomeIcon icon="star" className={isChecked(5)} />
            </>
        );
    };

    render() {
        // let icon =
        //     this.props.icon === undefined ? null : (
        //         <DevIcon icon={this.props.icon} style={{ height: "30px" }} />
        //     );

        return (
            <>
                <div className="skill">
                    <Modal
                        isOpen={this.state.displayModal}
                        toggle={this.toggleModal}
                        {...this.props}
                    />
                    <h5>
                        <a href="#" onClick={this.handleToggle}>
                            {/* {icon} */}
                            {this.props.title}
                        </a>{" "}
                        <small>{this.getStars(this.props.stars)}</small>
                    </h5>
                </div>
            </>
        );
    }
}

Skill.defaultProps = defaultProps;
Skill.propTypes = propTypes;

export default Skill;
