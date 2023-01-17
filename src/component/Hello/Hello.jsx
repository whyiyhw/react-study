import hello from './hello.module.css';
import React, {Component, useState, useEffect} from "react";

export default class Hello extends Component {

    render() {
        return (
            <>
                <div className={hello.title}>Hello {this.props.children}</div>
                <Example okProps={1}/>
            </>
        )
    }
}

function Example(props) {
    const [count, setCount] = useState(0);
    console.log(props)

    useEffect(() => {
        document.title = `You clicked ${count} times`;

        return () => {
            console.log(`unmount ${count} ${Date.now().toLocaleString()}`);
        }
    })

    console.log("render", count)

    return (<>
        <p> click {count} times </p>
        <button onClick={() => setCount(count + 1)}>click me</button>
    </>)
}
