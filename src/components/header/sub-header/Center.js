import React,{Component} from "react";

class Center extends Component{
  constructor(...args){
    super(...args);
  }

  render(){
    return (
      <div className="center">
        <button className="expert">您好，专家</button>
        <button className="self-center">个人中心</button>
        <button className="help">帮助</button>
      </div>
    )
  }
}

export default Center;