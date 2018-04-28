import React from "react";
import styles from "./index.scss"

export default class SectionHeader extends React.Component{
    render(){
        return <h2 className={styles.heading}>{this.props.children}</h2>
    }
}