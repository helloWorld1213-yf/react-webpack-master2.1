import React,{Component} from "react";

import axios from 'axios';

class TestData extends Component{
  constructor(...args) {
    super(...args);
  }


  //b在组件刚被挂载的时候获取数据(即当页面加载出来的同时获取数据，已测试成功)
  async componentDidMount(){
    /*let yf = {'a':2};*/
    let form = new FormData();
    form.append('user','yf');
    form.append('password','123456');

    /*await axios({
      url:'http://wechatapptest.natapp1.cc/well/test',
      method:'POST',
      data:form
    });*/

    try{
        let res = await fetch('http://wechatapptest.natapp1.cc/well/test',{
          method:'POST',
          body:form
        });
        let {ok,err} = await res.json();
        if(ok){
          console.log('添加成功');
        }else{
          console.log('错误1',err);
        }
      }catch(e){
        console.log('错误2');
      }

    //let {data: {data}} = await axios.get('http://wechatapptest.natapp1.cc/well/list?wellState=1');

    //console.log(data[0],data[1]);

    /*export default (url, data, method='GET') => {
      if (method === "GET") {
        return new Promise((resolve, reject) => {
          axios
            .get(url, {
              params: data
            })
            .then(res => resolve(res.data))
            .catch(err => message.error("请求出错了:" + err));
        });
      } else {
        return new Promise((resolve, reject) => {
          axios
            .post(url, data)
            .then(res => resolve(res.data))
            .catch(err => message.error("请求出错了:" + err));
        });
      }
    };*/

  }

  render(){
    return (
      <div>
        从后端接口拿数据，数据见控制台
      </div>
    )
  }
}

export default TestData;