import React from "react";
import Layout from "../layouts/main/main";
import { getCollection } from "../api/cms-api";

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
                <h2>Things I like</h2>
                {activities.map((activity) => {
                    return <p>{activity.name}</p>
                })}
            </Layout>
        );
    }
}
