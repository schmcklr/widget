//needed to render pictures inside the chat container
import {Component} from "react";
export default class CustomImage extends Component {
    render() {
        return <img  src={this.props.src} height="150" width="250"  object-fit="cover"></img>
    }
}