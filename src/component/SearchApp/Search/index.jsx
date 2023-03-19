import React, { Component } from 'react';
import axios from "axios";
import PubSub from 'pubsub-js'

class Index extends Component {

    Search = async () => {
        // 获取用户输入
        const { InputElement1: { value: c } } = this;
        console.log(c);
        PubSub.publish("search", { isFirst: false, isLoading: true });
        // 网络请求
        //https://api.github.com/search/users?q=whyiyhw
        await axios.get("https://api.github.com/search/users?q=" + c).then(
            response => {
                console.log(response);
                PubSub.publish("search", { isLoading: false, users: response.data.items });
            },
            error => {
                console.log(error);
                PubSub.publish("search", { isLoading: false, err: error.message });
            }
        )
    }

    render() {
        return (
            <section className={"jumbotron"}>
                <h3 className={"jumbotron-heading"}>
                    Search Github Users
                </h3>
                <label htmlFor="">
                    <input ref={e => this.InputElement1 = e} type="text" placeholder="enter the name you search" />&nbsp;
                    <button onClick={this.Search}>Search</button>
                </label>
            </section>
        );
    }
}

export default Index;