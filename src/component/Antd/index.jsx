import React, { Component } from 'react'
import { Button } from 'antd';
import store from '../../redux/store'

export default class Antd extends Component {

  increment = () => {
    const { value } = this.selectNumber
    this.props.jia(value*1)
  }

  decrement = () => {
    const { value } = this.selectNumber
    this.props.jian(value*1)
  }

  addOdd = () => {
    const { value } = this.selectNumber
    const { count } = store.getState()
    if (count % 2 !== 0) {
      this.props.jia(value*1)
    }
  }

  addAsync = () => {
    const { value } = this.selectNumber
    this.props.jiaAsync(value*1, 500)
  }

  render() {
    console.log(this.props)
    console.log(store.getState())

    return (
      <div>
        {/* 
        存在一个输入框 A
         + - 奇数才+ 偶数才+ Button  , 每个按钮 点击时 从 A 中取值 + currNumber
         */}
        <h1>当前求和为：{store.getState().count}</h1>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        &nbsp;<Button shape="circle"  onClick={this.increment}>+</Button>
        &nbsp;<Button shape="circle" onClick={this.decrement}>-</Button>
        &nbsp;<Button onClick={this.addOdd}>奇数+</Button>
        &nbsp;<Button onClick={this.addAsync}>异步+</Button>

      </div>
    )
  }
}
