import React, {Component} from 'react';

class TaskInput extends Component {
    render() {
        return (
            <>
                <input type="text" value={this.props.inputValue} placeholder="请输入任务名称，并按回车键确认" onKeyDown={this.props.handlerKeyDown}/>
                <hr/>
            </>
        );
    }
}

export default TaskInput;