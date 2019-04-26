import { Row, Col } from "reactstrap";
import Layout from "../components/Layout";

const Tech = props => (
    <Layout>
        <Row tag="section">
            <Col md={{ offset: "3", size: "6" }}>
                <h1 className="display-4 text-center">Tech Stack</h1>
                <div
                    className="tab"
                    style={{
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "20px",
                        height: "4px",
                    }}
                />
                <div className="text-justify">
                    <p>
                        So, I decided to make a new website. I wanted to use a
                        technology that I haven't used before. As I love
                        JavaScript, React was the obvious choice!
                    </p>
                    <h4>Frontend</h4>
                    <p>
                        Server-side rendering: React is great, however, React
                        being rendered on the server is better! I achieved this
                        using the Next JS framework.
                    </p>
                    <p>
                        Clearly, I needed to host this somewhere. Never having
                        used Next JS or hosting anything like this, it took a
                        while to figure out.
                    </p>
                    <p>
                        After painstakingly searching all over Google, I found a
                        way to host my new website: Node and Express! Having
                        never used Next JS or Node before this became quite
                        confusing.
                    </p>
                    <p>
                        Then I needed to get Node running with IIS. Cue,
                        IISNode, my saviour. It almost got to a point where I
                        was just going to use ASP.NET Core and an MVC approach.
                    </p>
                    <p>
                        All which was left for the frontend was to hook it up to
                        some form of CMS or backend!
                    </p>
                    <h4>Backend</h4>
                    <p>Now this is where things got interesting.</p>
                    <p>
                        Go... I thought Golang would be a good idea. It was
                        definetly an experience, to say the least, but I've
                        grown to love it! The syntax and how to do things in
                        general are quite different to what I'm used to but I
                        really enjoyed it.
                    </p>
                    <h4>More</h4>
                    <p>
                        All hosted on Windows with IIS! Docker is the next step!
                    </p>
                </div>
            </Col>
        </Row>
    </Layout>
);

export default Tech;
