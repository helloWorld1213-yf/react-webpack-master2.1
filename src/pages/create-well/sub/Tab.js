import React,{Component} from "react";
import {Route} from 'react-router-dom';

import WellBaseDataTable from './WellBaseDataTable';
import EditableFormTable from './WellStructTable';
import WellRodTable from './WellRodTable';
import WellPipeTable from './WellPipeTable';


import { Tabs } from 'antd';
const { TabPane } = Tabs;

class Tab extends Component{
  constructor(...args){
    super(...args);
  }

  render(){
    return (
      <div className="tab">
        <Tabs defaultActiveKey="1" >
          <TabPane tab="输入基本信息" key="1">
            <WellBaseDataTable/>
          </TabPane>
          <TabPane tab="套管结构" key="2">
            <EditableFormTable/>
          </TabPane>
          <TabPane tab="入井管串" key="3">
            <WellPipeTable/>
          </TabPane>
          <TabPane tab="入井杆串" key="4">
            <WellRodTable/>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default Tab;
