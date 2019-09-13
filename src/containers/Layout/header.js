import React from "react";
import { Row, Col } from "reactstrap";
import PropTypes from "prop-types";

const defaultProps = {
    path: "/",
    nav: [],
};
const propTypes = {
    path: PropTypes.string,
    nav: PropTypes.arrayOf(PropTypes.object),
};

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    renderNavLink = (data, key) => {
        const target = data.target === undefined ? "_self" : data.target;
        const path = data.target === undefined ? "#" : data.path;

        const isActive = this.props.path === data.path;

        return (
            <li className={isActive ? "active" : ""} key={key}>
                <a href={path} target={target}>
                    {data.text}
                </a>
            </li>
        );
    };

    render() {
        return (
            <Row tag="nav">
                <Col>
                    <div className="nav">
                        <ul>
                            {this.props.nav.map((nav, key) =>
                                this.renderNavLink(nav, key)
                            )}
                        </ul>
                    </div>
                </Col>
            </Row>
        );
    }
}

Header.defaultProps = defaultProps;
Header.propTypes = propTypes;

export default Header;
