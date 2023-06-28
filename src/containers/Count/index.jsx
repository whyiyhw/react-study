import antd from '../../component/Antd'
import { connect } from 'react-redux'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action'

// 1. mapStateToProps函数返回的是一个对象
// 2. 返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
// 3. mapStateToProps用于传递状态


export default connect(
    state => ({ count: state }),
    dispatch => ({
        jia: number => dispatch(createIncrementAction(number)),
        jian: number => dispatch(createDecrementAction(number)),
        jiaAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time))
    })
)(antd)
