import React from "react";
import CmsImage from "../../atoms/CmsImage";
import styles from "./index.scss";

export default class Avatar extends React.Component{
    render(){
        const { name } = this.props;
        return(
            <CmsImage className={styles.avatar} name={name} />
        )
    }
}