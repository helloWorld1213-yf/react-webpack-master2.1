import React,{Component} from "react";
import {Link} from 'react-router-dom';

import '../../assets/css/home-page/sider.css';

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
          {/*一级目录：油气井数据*/}
          <SubMenu
            key="sub1"
            title={
              <span>
                <Link to="/wells">油气井数据</Link>
              </span>
            }
          >
          </SubMenu>
          {/*一级目录：修井资料*/}
          <SubMenu
            key="sub2"
            title={
              <span>
                {/*<Link to="/xxx">修井资料</Link>*/}
                <span>修井资料</span>
              </span>
            }
          >
          </SubMenu>
          {/*一级目录：修井设备工具*/}
          <SubMenu
            key="sub3"
            title={
              <span>
                <span>修井设备工具</span>
              </span>
            }
          >
            <Menu.Item key="1">
              <Link to="/workover-rig">修井机</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/blowout-prevent">防喷器</Link>
            </Menu.Item>
          </SubMenu>

        </Menu>
      </div>
    );
  }
}

export default MainSider;