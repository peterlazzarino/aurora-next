import React from "react";
import Layout from "../layouts/main/main";
import { getCollection } from "../api/cms-api";
import { Row, Col } from "react-bootstrap";
import PagePreview from "../components/content/pagepreview/PagePreview";
import SectionHeading from "../components/atoms/headings/SectionHeading";

export default class App extends React.Component {
    static async getInitialProps({ req }) {
        const { data } = await getCollection("topfacts");
        return {
            facts: data.entries || []
        };
    }
    render() {
        const { facts } = this.props;
        return (
            <Layout>
                <SectionHeading>Let's get to know Aurora!</SectionHeading>
                <Row>
                    {facts.map((fact) => {
                        return <PagePreview {...fact} />
                    })}
                </Row>
            </Layout>
        );
    }
}
