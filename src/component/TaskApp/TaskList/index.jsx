import React, {Component} from 'react';
import TaskItem from "./TaskItem";

class TaskList extends Component {
    handlerMouseEnter = (e) => {
        console.log(e.target)
    }

    handlerMouseLeave = (e) => {
        console.log(e.target)
    }

    render() {
        const {taskList} = this.props

        return (
            <>
                {
                    taskList.map((task, index) => {
                        return (
                            <TaskItem taskName={task.name} mouseInRange={task.mouseInRange} key={index}
                                      handlerMouseEnter={this.handlerMouseEnter}
                                      handlerMouseLeave={this.handlerMouseLeave}
                            />
                        )
                    })
                }
            </>
        );
    }
}

export default TaskList;