import React from "react";
import "../static/css/navbar.css";

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { path: "" };
    }

    componentDidMount() {
        var path = location.pathname;
        if (path[0] !== "/") path = "/" + path.toLowerCase();

        this.setState({ path: path });
    }

    render() {
        return (
            <nav className="nav">
                <ul>
                    <li className={this.state.path === "/" ? "active" : ""}>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="https://github.com/reecerussell">Github</a>
                    </li>
                    <li className={this.state.path === "/tech" ? "active" : ""}>
                        <a href="/tech">Tech</a>
                    </li>
                </ul>
            </nav>
        );
    }
}
