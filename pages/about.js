import React from "react";
import Layout from "../layouts/main/main";
import { Row } from "react-bootstrap"; 
import { getCollection } from "../api/cms-api";
import Highlight from "../components/content/highlight/Highlight";
import SectionHeading from "../components/atoms/headings/SectionHeading";

export default class About extends React.Component {
    static async getInitialProps({ req }) {
        const { data } = await getCollection("favoriteactivities");
        return {
            activities: data.entries
        };
    }
    render() {
        const { activities } = this.props;
        return (
            <Layout>
                <SectionHeading>Things Aurora Likes</SectionHeading>
                <Row>
                    {activities.map((activity) => {
                        return <Highlight name={activity.name} />
                    })}
                </Row>
            </Layout>
        );
    }
}
