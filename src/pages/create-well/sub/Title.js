import React,{Component} from "react";
import {Route} from 'react-router-dom';

class Title extends Component{
  constructor(...args){
    super(...args);
  }

  render(){
    return (
      <div className="title">
        创建油气井项目
      </div>
    )
  }
}

export default Title;
