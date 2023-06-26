import React, { Component } from 'react'
import { Button, DatePicker } from 'antd';
import {
  WechatOutlined,
} from '@ant-design/icons';

const { RangePicker } = DatePicker;

export default class Antd extends Component {

  onChange = (date, dateString) => {
    console.log(date, dateString);
  }

  render() {

  
    return (
      <div>
        <Button type="primary" icon={<WechatOutlined />}>Primary Button</Button>
        <RangePicker onChange={this.onChange} />
      </div>
    )
  }
}
