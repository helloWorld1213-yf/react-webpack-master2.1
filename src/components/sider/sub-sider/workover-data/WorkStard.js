import React,{Component} from "react";

import { Menu } from 'antd';

class WorkStard extends Component{
  constructor(...args){
    super(...args);
  }

  render(){
    return (
      <Menu.Item key="1" >油气井信息</Menu.Item>
    )
  }
}

export default WorkStard;
