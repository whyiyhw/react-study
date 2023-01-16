import React, { Component } from 'react';
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import TaskAppCss from './index.module.css';

class TaskApp extends Component {

    state = {
        inputValue: "",
        taskList: [
            { name: "123", mouseInRange: false, isDeleted: false },
            { name: "456", mouseInRange: false, isDeleted: false },
            { name: "789", mouseInRange: false, isDeleted: false },
        ],
    }

    handlerKeyDown = (e) => {
        // 回车键  提交数据
        if (e.keyCode === 13) {
            const { taskList, inputValue } = this.state
            taskList.push({
                name: inputValue,
                mouseInRange: false,
                isDeleted: false,
            })

            this.setState({
                inputValue: "",
                taskList: taskList
            })
        }
    }

    handlerChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    handlerMouseInRangeChange = (index, mouseInRange) => {
        const { taskList } = this.state
        taskList[index].mouseInRange = mouseInRange
        this.setState({
            taskList: taskList
        })
    }

    render() {

        const { inputValue, taskList } = this.state;

        return (
            <div className={TaskAppCss.container}>
                <TaskInput inputValue={inputValue} onKeyDown={this.handlerKeyDown} onChange={this.handlerChange} />
                <TaskList taskList={taskList} handlerMouseInRangeChange={this.handlerMouseInRangeChange}/>
            </div>
        );
    }
}

export default TaskApp;