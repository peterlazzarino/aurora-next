import React from "react";
import Link from "../../components/navigation/link/Link";
import styles from "./index.scss";
import TintedHero from "../../components/images/tinted-hero/TintedHero";
import { Grid, Col, Row } from "react-bootstrap";
import Avatar from "../../components/images/avatar/Avatar";

export default class Layout extends React.Component {
    render() {
        return (
            <Grid className={styles.layout}>
                <Row className={styles.header}>
                    <TintedHero name="header-hero" />
                    <div className={styles.headerContent}>
                        <Row>
                            <Col xs={12} className={styles.imageContainer}>
                                <Avatar name="header-image" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} className={styles.menuContainer}>
                                <Link href="/">home</Link>{' | '}
                                <Link href="/about">about</Link>
                            </Col>
                        </Row>
                    </div>
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