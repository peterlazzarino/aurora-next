import React from "react";
import { initImages } from "react-adaptive-image";
import AdaptiveImage from "react-adaptive-image";
import Layout from "../layouts/main/main";

initImages({
    imageResolver: function(image){
        return `https://i.imgur.com/${image.fileName}`
    }
})

export default class App extends React.Component {
    render() {
        return (
            <Layout>
                Hello this is app.
                <AdaptiveImage backgroundImage className="header-image" fileName={"U6zWkcZ.png"} />
            </Layout>
        );
    }
}
