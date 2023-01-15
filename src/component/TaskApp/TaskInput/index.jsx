import React, {Component} from 'react';
import TaskInputCss from "./index.module.css";

class TaskInput extends Component {
    render() {
        return (
            <label className={TaskInputCss.input}>
                <input type="text" value={this.props.inputValue} placeholder="请输入任务名称，并按回车键确认"
                       onKeyDown={this.props.handlerKeyDown}/>
            </label>
        );
    }
}

export default TaskInput;