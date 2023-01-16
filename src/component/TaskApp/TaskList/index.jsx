import React, {Component} from 'react';
import TaskItem from "./TaskItem";
import TaskListCss from "./index.module.css";

class TaskList extends Component {

    handlerMouseEnter = (e, key) => {
        this.props.handlerMouseInRangeChange(key, true)
    }

    handlerMouseLeave = (e, key) => {
        this.props.handlerMouseInRangeChange(key, false)
    }

    handlerClickDel = (e, key) => {
        this.props.handlerClickDel(key)
    }

    handlerClickCompleted = (e, key) => {
        this.props.handlerClickCompleted(key)
    }

    render() {
        const {taskList} = this.props

        return (
            <div className={TaskListCss.container}>
                {
                    taskList.map((task, index) => {
                        return (
                            <TaskItem taskName={task.name}
                                      isDeleted={task.isDeleted}
                                      isComplete={task.isComplete}
                                      mouseInRange={task.mouseInRange}
                                      index={index}
                                      key={index}
                                      handlerMouseEnter={this.handlerMouseEnter}
                                      handlerMouseLeave={this.handlerMouseLeave}
                                      handlerClickDel={this.handlerClickDel}
                                      handlerClickCompleted={this.handlerClickCompleted}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

export default TaskList;