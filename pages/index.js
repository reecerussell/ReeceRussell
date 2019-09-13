import React from "react";
import content from "../src/_content";
import Layout from "../src/containers/Layout";
import { Intro, About, Experience, Skills, Projects } from "../src/views";
import { DevIcon } from "../src/components/skill/icon";

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout title="Home" path="/">
                <Intro {...content.intro} />
                <About {...content.about} />
                <Projects {...content.projects} />
                <Skills {...content.skills} />
                <Experience
                    education={content.experience.education}
                    work={content.experience.work}
                />
            </Layout>
        );
    }
}

export default Index;
