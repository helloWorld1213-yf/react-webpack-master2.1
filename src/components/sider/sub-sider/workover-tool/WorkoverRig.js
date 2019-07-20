import React,{Component} from "react";

import { Menu } from 'antd';
const { SubMenu } = Menu;

class WorkoverRig extends Component{
  constructor(...args){
    super(...args);
  }

  render(){
    return (
      <Menu.Item key="3" >修井机</Menu.Item>
    )
  }
}

export default WorkoverRig;
