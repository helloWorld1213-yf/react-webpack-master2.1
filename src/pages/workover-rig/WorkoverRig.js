import React,{Component} from "react";
import {Route} from 'react-router-dom';

/*引入header部分的css样式*/
import '../../assets/css/home-page/content.css';

import Title from './sub/Title';
import AddBtn from './sub/AddBtn';
import Table from './sub/Table';

class BlowoutPrevent extends Component{
  constructor(...args){
    super(...args);
  }

  render(){
    return (
      <div className="content">
        <Title/>
        <AddBtn/>
        <Table/>
      </div>
    )
  }
}

export default BlowoutPrevent;
