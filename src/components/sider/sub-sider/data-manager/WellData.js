import React,{Component} from "react";

import { Menu } from 'antd';

class WellData extends Component{
  constructor(...args){
    super(...args);
  }

  render(){
    return (
      <Menu.Item key="2" >油气井信息</Menu.Item>
    )
  }
}

export default WellData;
