import React from "react";
import { getImage, getFinalImagePath } from "../../api/cms-api";

export default class CmsImage extends React.Component{
    constructor(){
        super();
        this.state = {
            path: undefined
        };
    }
    async componentWillMount(){
        const { name } = this.props;
        this.setState({
            path: await getImage(name)
        }) 
    }
    render(){
        const { path } = this.state;
        const { className } = this.props;
        return(
            <img className={className} src={path} />
        )
    }
}