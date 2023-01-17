import React, {Component} from 'react';
import TaskItemCss from "./index.module.css";
import PropTypes from 'prop-types';

class TaskItem extends Component {

    state = {
        mouseInRange: false,
    }
    // props 数据格式限制
    static propTypes = {
        name: PropTypes.string.isRequired,
        handlerClickDel: PropTypes.func.isRequired,
    }

    handlerMouseInRangeChange = (moveIn) => {
        this.setState({
            mouseInRange: moveIn
        })
    }

    render() {
        const {mouseInRange} = this.state

        const {
            name,
            handlerClickDel,
            handlerClickCompleted,
            isDeleted,
            isComplete,
            index,
        } = this.props;

        const style = {
            display: isDeleted ? "none" : "flex",
            backgroundColor: mouseInRange ? "rgba(204,204,204,0.22)" : "#fff",
        }

        return (
            <div className={TaskItemCss.input}
                 onMouseEnter={() => this.handlerMouseInRangeChange(true)}
                 onMouseLeave={() => this.handlerMouseInRangeChange(false)}
                 style={style}>

                <input type="checkbox" checked={isComplete} onChange={e => handlerClickCompleted(e, index)}/>
                <label style={{textDecoration: isComplete ? "line-through" : "none"}}> {name} </label>
                <button style={{display: mouseInRange ? 'block' : 'none'}}
                        onClick={e => handlerClickDel(e, index)}>删除
                </button>
            </div>
        );
    }
}

export default TaskItem;