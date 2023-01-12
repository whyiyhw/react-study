import React, {Component} from 'react';

class TaskItem extends Component {

    render() {
        const {
            taskName,
            mouseInRange,
            handlerMouseEnter,
            handlerMouseLeave
        } = this.props;

        return (
            <label>
                <input type="checkbox" checked={false} style={{backgroundColor: mouseInRange ? '#cccccc' : "#6e6464"}}
                       onMouseEnter={handlerMouseEnter}
                       onMouseLeave={handlerMouseLeave}
                />
                {taskName}
                <button style={{display: mouseInRange ? 'block' : 'none'}}>删除</button>
                <br/>
            </label>
        );
    }
}

export default TaskItem;