import React, {Component} from 'react';
import TaskItem from "./TaskItem";
import TaskListCss from "./index.module.css";

class TaskList extends Component {

    handlerClickDel = (e, key) => {
        if (window.confirm("确定删除吗？")) {
            this.props.handlerClickDel(key)
        }
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
                            <TaskItem
                                      {...task}
                                      index={index}
                                      key={index}
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