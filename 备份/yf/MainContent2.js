import React,{Component} from "react";
import {Route} from 'react-router-dom';

/*引入header部分的css样式*/
import '../../src/assets/css/home-page/content.css';

import Wells from '../../components/Wells';

class MainContent2 extends Component{
  constructor(...args){
    super(...args);
  }

  render(){
    return (
      <div className="content">
        <Wells/>
      </div>
    )
  }
}

export default MainContent2;
