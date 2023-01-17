import React, {Component} from 'react';
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import TaskAppCss from './index.module.css';
import TaskFooter from "./TaskFooter";

class TaskApp extends Component {

    state = {
        inputValue: "",
        taskList: [
            {name: "123", isDeleted: false, isComplete: false},
            {name: "456", isDeleted: false, isComplete: false},
            {name: "789", isDeleted: false, isComplete: true},
        ],
    }

    handlerKeyDown = (e) => {
        // 回车键  提交数据
        if (e.keyCode !== 13) return;

        const {taskList, inputValue} = this.state
        if (inputValue.trim() === "") {
            alert("输入不能为空")
            return
        }

        taskList.push({name: inputValue, isDeleted: false, isComplete: false})

        this.setState({
            inputValue: "",
            taskList: taskList
        })
    }

    handlerChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    handlerClickDel = (index) => {
        const {taskList} = this.state
        taskList[index].isDeleted = true
        this.setState({
            taskList: taskList
        })
    }

    handlerClickCompleted = (index) => {
        const {taskList} = this.state
        taskList[index].isComplete = !taskList[index].isComplete
        this.setState({
            taskList: taskList
        })
    }

    completedAll = (e) => {
        const val = e.target.checked
        let {taskList} = this.state
        taskList = taskList.map((task) => {
            return {...task, isComplete: val}
        })
        this.setState({
            taskList: taskList
        })
    }

    clearCompletedAll = () => {
        let {taskList} = this.state
        taskList = taskList.map((task) => {
            return task.isComplete ? {...task, isDeleted: true} : task;
        })
        this.setState({taskList: taskList})
    }

    render() {

        const {inputValue, taskList} = this.state;

        return (
            <div className={TaskAppCss.container}>
                <TaskInput inputValue={inputValue} onKeyDown={this.handlerKeyDown} onChange={this.handlerChange}/>
                <TaskList taskList={taskList}
                          handlerClickDel={this.handlerClickDel}
                          handlerClickCompleted={this.handlerClickCompleted}
                />
                <TaskFooter taskList={taskList} completedAll={this.completedAll}
                            clearCompletedAll={this.clearCompletedAll}/>
            </div>
        );
    }
}

export default TaskApp;