//needed to render pictures
import {Component} from "react";
export default class CustomImage extends Component {
    render() {
        return <img alt="placeholder" src={this.props.src} height="150" width="250"  object-fit="cover"></img>
    }
}