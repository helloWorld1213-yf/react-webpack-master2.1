import React,{Component} from "react";

import axios from 'axios';

class TestImg extends Component{
  constructor(...args){
    super(...args);

    this.state={
      users:[]
    };
  }

  async componentDidMount(){
    // let res = await fetch('/test/data.txt');    //第一次await是为了得到头
    // let data = await res.json();    //第二次await是为了获取body，res.json()是为了解析body当中带的数据

    // let result = await axios.get('/test/data.txt');
    // console.log(result);    //结果为Object{...,data:...,...}，当中的data就是我们需要的数据

    let {data} = await axios.get('/test/data.txt');
    //console.log(data);    //结果为data.txt当中的内容，即我们需要的数据

    this.setState({
      users:data
    })




  }

  render(){
    return (
      <div>
        用axios获取的数据
        <ul>
          {this.state.users.map((user,index)=>(
            <li key={index}>
              <div>姓名：{user.name}</div>
              <div>年龄：{user.age}</div>
            </li>
          ))}
        </ul>
      </div>
    )
  }


}

export default TestImg;