import React,{Component} from "react";

/*引入子组件*/
import Logo from './sub-header/Logo';
import Menu from './sub-header/Menu';
import Center from './sub-header/Center';

/*引入header部分的css样式*/
import '../css/header.css';

class MainHeader extends Component{
  constructor(...args){
    super(...args);
  }

  render(){
    return (
      <div className="header">
        <Logo/>
        <Menu/>
        <Center/>
      </div>
    )
  }
}

export default MainHeader;
