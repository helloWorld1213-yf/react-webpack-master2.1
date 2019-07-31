import React,{Component} from "react";
import {Route, Redirect} from 'react-router-dom';

/*引入子组件*/
import MainHeader from "./layout/header/MainHeader";
import MainSider from "./layout/sider/MainSider";
import HomePage from "./pages/home-page/HomePage";

import CreateWell from './pages/create-well/CreateWell';
import BlowoutPrevent from "./pages/blowout-prevent/BlowoutPrevent";
import WorkoverRig from "./pages/workover-rig/WorkoverRig";

/*数据交互测试用的，之后删掉*/
// import TestData from '../test/TestData';
// import TestImg from '../test/TestImg';
// import TestAxios from '../test/TestAxios';

/*测试从本次项目后端接口拿数据*/
import Test1 from '../备份/yf/test/Test1';

class App extends Component {
  constructor(...args){
    super(...args);
  }

  render() {
    return (
    <div className="box">
      <MainHeader/>
      <div className="body">
        <MainSider/>
        <div>
          {/*yf*/}
          <Route path="/" exact component={HomePage} />
          <Route path="/wells" component={HomePage}/>
          <Route path="/create-well" component={CreateWell}/>
          <Route path="/blowout-prevent" component={BlowoutPrevent}/>
          <Route path="/workover-rig" component={WorkoverRig}/>
          {/*wyx*/}

        </div>
      </div>

      {/*<TestData/>*/}
     {/* <TestImg/>*/}
      {/*<TestAxios/>*/}
      <Test1/>

    </div>
    );
  }
}

export default App;
