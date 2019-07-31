import React,{Component} from "react";

import axios from 'axios';

class TestData extends Component{
  constructor(...args){
    super(...args);

    this.state={
      users:[]
    };
  }

  //a在事件响应函数当中获取数据（此时是单击按钮，则获取数据，已测试成功)
  /*fn(){
    alert('aaa');

    /!*用原生fetch获取数据，获取数据已成功*!/
    fetch('/test/data.txt').then(res=>res.json(),err=>{
      console.log(err);
    }).then(data=>{
      console.log(data);
    },err=>{
      console.log(err);
    });

    /!*用fetch的async-await方式*!/
    (async ()=>{
      try{
        let res = await fetch('/test/data.txt');
        let data = await res.json();
        console.log(data);

        console.log(res.headers);   //打印结果为一个数组， 如果要获取当中的属性值则必须得用get方式获取
        console.log(res.headers.get('Content-Type'));   //结果为text/plain; charset=UTF-8

        this.setState({
          users:data
        });
      }catch(e){
        alert('数据请求失败，请刷新重试哦~');
      }

    })();
  }*/

  //b在组件刚被挂载的时候获取数据(即当页面加载出来的同时获取数据，已测试成功)
  async componentDidMount(){
    let res = await fetch('/test/data.txt');    //第一次await是为了得到头
    let data = await res.json();    //第二次await是为了获取body，res.json()是为了解析body当中带的数据

    this.setState({
      users:data
    });
  }



  render(){
    return (
      <div>
        {/*a<button onClick={this.fn.bind(this)}>点击获取数据</button>*/}
        用fetch获取的数据
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

export default TestData;