import React, {Component} from 'react';

class TaskFooter extends Component {
    render() {
        return (
            <div>
                已完成{this.props.taskDown}/全部{this.props.taskCount}
            </div>
        );
    }
}

export default TaskFooter;