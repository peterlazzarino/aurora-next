import React from "react";
import { Col } from "react-bootstrap";
import Button from "../../navigation/button/Button";
import styles from "./index.scss";

export default class PagePreview extends React.Component{
    render(){
        const { shortDescription, title, iconClass } = this.props;
        return (
            <Col xs={12} md={4}>
                <h3><i className={`fa ${iconClass} ${styles.icon}`}></i>{title}</h3>
                <p>{shortDescription}</p>
                <Button>Learn More!</Button>
            </Col>
        )
    }
}