import React from "react";
import { Container, Row, Col } from "reactstrap";
import content from "../../_content";
import Head from "next/head";
import Footer from "./footer";
import "../../scss/styles.scss";
import Header from "./header";

const Layout = props => {
    const title = () => {
        const baseTitle = content.baseTitle;
        let title = props.title;

        switch (title) {
            case "":
            case null:
            case undefined:
                return baseTitle;
            default:
                return title + " / " + baseTitle;
        }
    };

    const path = () => {
        const pathProp = props.path;
        if (!pathProp) {
            return "#";
        } else {
            return pathProp;
        }
    };

    return (
        <>
            <div className="background">
                <Container tag="main">
                    <Head>
                        <title>{title()}</title>
                    </Head>
                    <Header path={path()} nav={content.nav} />
                    {props.children}
                </Container>
                <Footer {...content.footer} />
            </div>
        </>
    );
};

export default Layout;
