import React,{Component} from "react";

/*引入子组件*/
import MainHeader from "./components/header/MainHeader";
import MainSider from "./components/sider/MainSider";
import MainContent from "./components/content/MainContent";

class App extends React.Component {
  constructor(...args){
    super(...args);
  }

  render() {
    return (
      <div className="box">
        <MainHeader/>
        <div className="body">
          <MainSider/>
          <MainContent/>
        </div>
      </div>
    );
  }
}

export default App;