import React,{Component} from "react";

/*引入header部分的css样式*/
import '../css/content.css';

class MainContent extends Component{
  constructor(...args){
    super(...args);
  }

  render(){
    return (
      <div className="content">
        Content
      </div>
    )
  }
}

export default MainContent;
