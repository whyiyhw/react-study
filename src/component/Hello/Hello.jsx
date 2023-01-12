import hello from './hello.module.css';
import React,{Component} from "react";

export default class Hello extends Component {

    render() {
        return (
            <div className={hello.title}>Hello React</div>
        )
    }

}