import React from "react";
import Link from "next/link";
import styles from "./index.scss";

export default class Layout extends React.Component{
    render(){
        return (      
            <div className={styles.layout}>      
                <h1>Home</h1>
                <Link href="/about"><a>about</a></Link>
                {this.props.children}
            </div>
        )
    }
}