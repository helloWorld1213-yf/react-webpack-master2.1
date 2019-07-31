import React,{Component} from "react";
import {Route} from 'react-router-dom';

import Title from './sub/Title';
import Tab from './sub/Tab';

import '../../assets/css/create-well/content.css';
import '../../assets/css/create-well/table.css';

class CreateWell extends Component{
  constructor(...args){
    super(...args);
  }

  render(){
    return (
      <div className="content">
        <Title/>
        <Tab />
      </div>
    )
  }
}

export default CreateWell;
