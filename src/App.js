import './App.css';
import React, {Component} from "react";
import Count from "./containers/Count";

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Count/>
            </div>
        );
    }
}
