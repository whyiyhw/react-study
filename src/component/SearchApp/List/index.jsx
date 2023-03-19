import React, { Component } from 'react';
import ListCss from "./index.module.css";
import PubSub from 'pubsub-js'

class Index extends Component {

    state = {
        users: [],          // 存储用户信息
        isFirst: true,      // 是否为第一次打开页面
        isLoading: false,   // 是否正在加载中
        err:"",             // 存储请求错误信息
    }
    token = null;

    componentDidMount() {
        console.log("List componentDidMount");
        this.token =  PubSub.subscribe("search", (_, data) => {
            console.log("List search event", data);
            this.setState(data);
        })
    }
    componentWillUnmount() {
        PubSub.unsubscribe(this.token);
    }

    render() {
        const {isFirst,isLoading,err,users} = this.state;

        if (isFirst) {
            return <h2>Enter name to search</h2>
        }
        if (isLoading) {
            return <h2>Loading...</h2>
        }
        if (err !== "") {
            return <h2 style={{ color: "red" }}>{err}</h2>
        }

        return (
            <div className="row">
                {
                    users.map((user) => {
                        return (
                            <div key={user.id} className={ListCss.card}>
                                <a href={user.html_url} target={"_blank"} rel="noreferrer">
                                    <img src={user.avatar_url} alt="user_avatar" style={{ width: '100px' }} />
                                </a>
                                <p className="card-text">Name: {user.login}</p>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Index;