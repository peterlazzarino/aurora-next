import React from "react";
import CmsImage from "../../atoms/CmsImage";
import styles from "./index.scss";

export default class TinterHero extends React.Component{
    render(){
        const { name } = this.props;
        return (
            <React.Fragment>
                <div className={styles.tint} />,
                <CmsImage width={1200} className={styles.hero} name={name} />
            </React.Fragment>
        )
    }
}