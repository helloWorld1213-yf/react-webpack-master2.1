import React,{Component} from "react";
import {Link} from 'react-router-dom';
import {Button} from 'antd';

class NextBtn extends Component{
  constructor(...args){
    super(...args);
  }

  render(){
    return (
      <div className="next-btn">
        <Button type="primary">下一步</Button>
      </div>
    )
  }
}

export default NextBtn;
