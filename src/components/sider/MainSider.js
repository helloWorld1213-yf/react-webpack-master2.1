import React,{Component} from "react";

import '../css/sider.css';

import { Menu } from 'antd';
const { SubMenu } = Menu;

class MainSider extends React.Component {
  constructor(...args){
    super(...args);
  }

  render() {
    return (
      <div className="sider">
        <Menu
          className="color"
          onClick={this.handleClick}
          style={{ width: 176 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <span>基础数据管理</span>
              </span>
            }
          >
            <Menu.Item key="2" >油气井信息</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                  <span>修井资料</span>
              </span>
            }
          >
            <Menu.Item key="1" >油气井信息</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <span>修井设备工具</span>
              </span>
            }
          >
            <Menu.Item key="3" >修井机</Menu.Item>
            <Menu.Item key="4">防喷器</Menu.Item>

          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default MainSider;