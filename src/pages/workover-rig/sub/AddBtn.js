import React,{Component} from "react";

import {Button} from 'antd';

class CreateBtn extends Component{
  constructor(...args){
    super(...args);
  }

  render(){
    return (
      <div className="create-btn">
        <Button type="primary">新增修井设备</Button>
      </div>
    )
  }
}

export default CreateBtn;