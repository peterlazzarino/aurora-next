import React from "react";
import Link from "next/link";
import styles from "./index.scss";
import { Grid, Col, Row } from "react-bootstrap";
import Avatar from "../../components/images/avatar/Avatar";

export default class Layout extends React.Component {
    render() {
        return (
            <Grid className={styles.layout}>
                <Row>
                    <Col xs={12}>
                        <Avatar name="header-image" />
                        <h1>HELLO</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Link href="/"><a>home</a></Link>{' '}
                        <Link href="/about"><a>about</a></Link>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        {this.props.children}
                    </Col>
                </Row>
            </Grid>
        )
    }
}