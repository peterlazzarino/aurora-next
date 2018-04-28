import React from "react";
import { Col } from "react-bootstrap";
import styles from "./index.scss";

export default class Highlight extends React.Component{
    render(){
        const { name } = this.props;
        return (
            <Col xs={12} sm={6}>
                <Col xs={12} className={styles.highlight}>
                    {name}
                </Col>
            </Col>
        )
    }
}