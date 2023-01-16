import React, {Component} from 'react';
import TaskItemCss from "./index.module.css";

class TaskItem extends Component {

    checkbox = React.createRef()

    componentDidMount() {
        this.checkbox.current.checked = this.props.isComplete
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.checkbox.current.checked = this.props.isComplete
    }

    render() {
        const {
            taskName,
            mouseInRange,
            handlerMouseEnter,
            handlerMouseLeave,
            handlerClickDel,
            handlerClickCompleted,
            isDeleted,
            isComplete,
            index,
        } = this.props;

        return (
            <div className={TaskItemCss.input}
                 onMouseEnter={e => handlerMouseEnter(e, index)}
                 onMouseLeave={e => handlerMouseLeave(e, index)}
                 style={{display: isDeleted ? "none" : "flex"}}>

                <input type="checkbox" ref={this.checkbox} onChange={e => handlerClickCompleted(e, index)} defaultChecked={isComplete}/>
                <label style={{textDecoration: isComplete ? "line-through" : "none"}}> {taskName} </label>
                <button style={{display: mouseInRange ? 'block' : 'none'}}
                        onClick={e => handlerClickDel(e, index)}>删除
                </button>
            </div>
        );
    }
}

export default TaskItem;