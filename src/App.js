import './App.css';
import React, {Component} from "react";
import Count from "./containers/Count";
import store from './redux/store';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Count store={store}/>
            </div>
        );
    }
}
