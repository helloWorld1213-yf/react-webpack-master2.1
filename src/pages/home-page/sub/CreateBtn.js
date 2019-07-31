import React,{Component} from "react";
import {Link} from 'react-router-dom';

import {Button} from 'antd';

class CreateBtn extends Component{
  constructor(...args){
    super(...args);
  }

  render(){
    return (
      <div className="create-btn">
        <Button type="primary"><Link to="/create-well">创建</Link></Button>
      </div>
    )
  }
}

export default CreateBtn;