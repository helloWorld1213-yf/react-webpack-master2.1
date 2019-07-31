import React,{Component} from "react";

import {Input} from 'antd';

class CreateWell extends Component{
  constructor(...args){
    super(...args);
  }

  render(){
    return (
      <div>
        <Input style={{width:'100px',height:'10px',fontSize:'2px'}}/>
      </div>
    )
  }
}

export default CreateWell;
