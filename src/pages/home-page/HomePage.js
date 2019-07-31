import React,{Component} from "react";

/*引入header部分的css样式*/
import '../../assets/css/home-page/content.css';
import '../../assets/css/create-well/table.css';

import CreateBtn from './sub/CreateBtn';
import HomePageTable from './sub/HomePageTable';
import Title from './sub/Title';

class HomePage extends Component{
  constructor(...args){
    super(...args);
  }

  render(){
    return (
      <div className="content">
        <CreateBtn/>
        <Title/>
        <HomePageTable/>
      </div>
    )
  }
}

export default HomePage;
