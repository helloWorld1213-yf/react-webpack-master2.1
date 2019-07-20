import React,{Component} from "react";

import { Menu } from 'antd';
const { SubMenu } = Menu;

class BlowoutPrev extends Component{
  constructor(...args){
    super(...args);
  }

  render(){
    return (
      <Menu.Item key="4">防喷器</Menu.Item>
    )
  }
}

export default BlowoutPrev;
