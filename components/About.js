import '../static/css/about.css';
import React from 'react';
import {Row, Col} from 'reactstrap';

export default class About extends React.Component {
    render () {
        return (
            <Row id="about">
                <Col>
                    <h4>
                        About me
                    </h4>
                    <div className="tab"></div>
                    <p className="text-justify">
                        I am an apprentice software developer at a small company called Prominent Media while studying software development. My primary focus is on ASP.NET web applications, working with C# and SQL. From time to time, I explore the realms of Xamarin and working with web sockets and restful APIs. However, ASP.NET Core is my current obsession.
                    </p>
                </Col>
            </Row>
        );
    }
}