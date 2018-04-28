import Document, { Head, Main, NextScript } from "next/document";
import React from "react";
import { Col } from "react-bootstrap";
import fontawesome from '@fortawesome/fontawesome'

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <link rel="stylesheet" href="/_next/static/style.css" />
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossorigin="anonymous" />
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
                </Head>
                <body style={{padding:0, margin:0, backgroundColor:"#5f5f5f"}}>
                    <Col xs={12}>
                        <Main />
                        <NextScript />
                    </Col>
                </body>
            </html>
        )
    }
}