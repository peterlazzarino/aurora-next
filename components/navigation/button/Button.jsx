import Link from "next/link";
import React from "react";
import styles from "./index.scss";

export default class NavigationLink extends React.Component {
    render() {
        return (
            <Link href={this.props.href}>
                <button className={styles.button}>
                    {this.props.children}
                </button>
            </Link>
        )
    }
}