import React, {Component} from 'react';
import Search from "./Search";
import List from "./List";


class Index extends Component {


    updateAppData = (data) => {
        this.setState(data);
    }

    render() {
        return (
            <div className={"container"}>
                <Search/>
                <List/>
            </div>
        );
    }
}

export default Index;