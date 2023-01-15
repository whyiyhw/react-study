import React, {Component} from 'react';
import TaskItemCss from "./index.module.css";
class TaskItem extends Component {

    render() {
        const {
            taskName,
            mouseInRange,
            handlerMouseEnter,
            handlerMouseLeave
        } = this.props;

        return (
            <div className={TaskItemCss.input}>
                <input type="checkbox" checked={false} style={{backgroundColor: mouseInRange ? '#cccccc' : "#6e6464"}}
                       onMouseEnter={handlerMouseEnter}
                       onMouseLeave={handlerMouseLeave}
                />
                <label>{taskName}</label>
                <button style={{display: mouseInRange ? 'block' : 'none'}}>删除</button>
            </div>
        );
    }
}

export default TaskItem;