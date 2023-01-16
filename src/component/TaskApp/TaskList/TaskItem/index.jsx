import React, { Component } from 'react';
import TaskItemCss from "./index.module.css";
class TaskItem extends Component {

    render() {
        const {
            taskName,
            mouseInRange,
            handlerMouseEnter,
            handlerMouseLeave,
            index,
        } = this.props;

        return (
            <div className={TaskItemCss.input}
                onMouseEnter={e => handlerMouseEnter(e, index)}
                onMouseLeave={e => handlerMouseLeave(e, index)} >

                <input type="checkbox" />
                <label>{taskName}</label>
                <button style={{ display: mouseInRange ? 'block' : 'none' }}>删除</button>

            </div>
        );
    }
}

export default TaskItem;