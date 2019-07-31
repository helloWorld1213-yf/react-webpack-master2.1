import React,{Component} from "react";

/*引入antd组件*/
//import {Button} from 'antd';
//import {Input} from 'antd';
//import { Select } from 'antd';
//const { Option } = Select;
//import {Modal} from 'antd';



/*引入子组件*/


class App extends React.Component {
  constructor(...args){
    super(...args);
  }

  fn(){
    alert('aaa');
  }

  render() {
    return (
      <div>
        {/*<Button type="link"
                onClick={this.fn.bind(this)}
                style={{backgroundColor:'white', color:'blue', border:'0 none', animation:'none 0 ease 0 1 normal'}}
        >删除</Button>*/}

        {/*<Input size="small"
               placeholder="Basic usage"
               style={{width:'100px', height:'20px', border:'1px solid black', boxShadow:'none'}}
        />*/}

        {/*<Select defaultValue="lucy" style={{ width: 120 }}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>*/}

        {/*<Modal
          title="Basic Modal"
          visible="true"
        >
        </Modal>*/}


      </div>
    );
  }
}

export default App;