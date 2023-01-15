import React, {Component} from 'react';
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import TaskAppCss from './index.module.css';

class TaskApp extends Component {

    handlerKeyDown = (e) => {
        console.log(e.target)
    }

    render() {

        const taskList = [
            {name: "123", mouseInRange: false},
            {name: "456", mouseInRange: false},
            {name: "789", mouseInRange: false}
        ]
        const inputValue = "";

        return (
            <div className={TaskAppCss.container}>
                <TaskInput inputValue={inputValue} onKeyDown={this.handlerKeyDown}/>
                <TaskList taskList={taskList}/>
            </div>
        );
    }
}

export default TaskApp;