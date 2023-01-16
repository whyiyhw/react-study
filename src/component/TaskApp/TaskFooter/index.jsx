import React, {Component} from 'react';
import footer from './index.module.css';

class TaskFooter extends Component {
    render() {
        const {taskList,completedAll} = this.props

        const taskDown = taskList.filter((task) => {
            return task.isComplete === true && task.isDeleted === false
        }).length

        const taskCount = taskList.filter((task) => {
            return task.isDeleted === false
        }).length


        return (
            <div className={footer.container}>

                <input type="checkbox" onChange={completedAll}/>
                <label style={{display: "block"}}>
                    已完成{taskDown} / 全部{taskCount}
                </label>
            </div>
        );
    }
}

export default TaskFooter;