import React, {Component} from 'react';
import TaskItemCss from "./index.module.css";

class TaskItem extends Component {

    state = {
        mouseInRange: false,
    }

    checkbox = React.createRef()

    handlerMouseInRangeChange = (moveIn) => {
        this.setState({
            mouseInRange: moveIn
        })
    }

    componentDidMount() {
        this.checkbox.current.checked = this.props.isComplete
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.checkbox.current.checked = this.props.isComplete
    }

    render() {
        const {mouseInRange} = this.state

        const {
            taskName,
            handlerClickDel,
            handlerClickCompleted,
            isDeleted,
            isComplete,
            index,
        } = this.props;

        return (
            <div className={TaskItemCss.input}
                 onMouseEnter={() => this.handlerMouseInRangeChange(true)}
                 onMouseLeave={() => this.handlerMouseInRangeChange(false)}
                 style={{display: isDeleted ? "none" : "flex"}}>

                <input type="checkbox" ref={this.checkbox} onChange={e => handlerClickCompleted(e, index)}
                       defaultChecked={isComplete}/>
                <label style={{textDecoration: isComplete ? "line-through" : "none"}}> {taskName} </label>
                <button style={{display: mouseInRange ? 'block' : 'none'}}
                        onClick={e => handlerClickDel(e, index)}>删除
                </button>
            </div>
        );
    }
}

export default TaskItem;