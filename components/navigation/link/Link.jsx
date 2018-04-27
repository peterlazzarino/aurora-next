import Link from "next/link";
import React from "react";
import styles from "./index.scss";

export default class NavigationLink extends React.Component {
    render() {
        return (
            <Link href={this.props.href}>
                <a className={styles.link}>
                    {this.props.children}
                </a>
            </Link>
        )
    }
}