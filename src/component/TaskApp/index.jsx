import React, {Component} from 'react';
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

class TaskApp extends Component {

    handlerKeyDown = (e) => {
        console.log(e.target)
    }

    render() {

        const taskList = [{name: "123", mouseInRange: false}, {name: "456", mouseInRange: false}]
        const inputValue = "";

        return (
            <div>
                <TaskInput inputValue={inputValue} onKeyDown={this.handlerKeyDown}/>
                <TaskList taskList={taskList}/>
            </div>
        );
    }
}

export default TaskApp;