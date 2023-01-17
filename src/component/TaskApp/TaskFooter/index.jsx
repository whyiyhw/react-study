import React, {useState} from 'react';
import footer from './index.module.css';

export default function TaskFooter(props) {

    const [onMouseInRange, setOnMouseInRange] = useState(false);
    const {taskList, completedAll, clearCompletedAll} = props

    const taskDown = taskList.reduce((perv, task) =>
            perv + ((task.isComplete === true && task.isDeleted === false) ? 1 : 0)
        , 0)

    const taskCount = taskList.reduce((perv, task) => perv + (task.isDeleted ? 0 : 1), 0)
    const isHide = {display: onMouseInRange ? 'block' : "none"}

    const checked = taskDown === taskCount && taskCount > 0;

    return (
        <div className={footer.container}
             onMouseEnter={() => setOnMouseInRange(true)}
             onMouseLeave={() => setOnMouseInRange(false)}
        >
            <input checked={checked} type="checkbox" onChange={e => completedAll(e)}/>
            <label style={{display: "block"}}>
                已完成{taskDown} / 全部{taskCount}
            </label>
            <button onClick={clearCompletedAll} style={isHide}>清除已完成任务</button>
        </div>
    );
}