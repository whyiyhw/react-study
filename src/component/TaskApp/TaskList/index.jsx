import React, { Component } from 'react';
import TaskItem from "./TaskItem";
import TaskListCss from "./index.module.css";

class TaskList extends Component {

    handlerMouseEnter = (e, key) => {
        this.props.handlerMouseInRangeChange(key, true)
    }

    handlerMouseLeave = (e, key) => {
        this.props.handlerMouseInRangeChange(key, false)
    }

    handlerOnChange = (e) => {
        console.log(e.target)
    }

    render() {
        const { taskList } = this.props

        return (
            <div className={TaskListCss.container}>
                {
                    taskList.map((task, index) => {
                        return (
                            <TaskItem taskName={task.name} mouseInRange={task.mouseInRange} index={index} key={index}
                                handlerMouseEnter={this.handlerMouseEnter}
                                handlerMouseLeave={this.handlerMouseLeave}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

export default TaskList;