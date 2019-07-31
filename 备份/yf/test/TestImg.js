import React,{Component} from "react";

import axios from 'axios';

class TestImg extends Component{
  constructor(...args){
    super(...args);

    this.state={
      src:''
    };
  }

  async componentDidMount(){
    let res = await fetch('/test/八公.jpg');    //视频也可以

    let data = await res.blob();

    console.log(data);    //结果为blob(59566),括号里面的是图片的大小，单位是字节

    //怎样才能用这个data了，一般情况下，那么是给img一个地址，要么是base64,但是现在用一个新的东西：
      //即URL类，这个类上带有一个方法，只要把东西丢给它，它就能帮助这个东西生成一个临时地址，这个临时URL是直接指向内存的
      //所谓临时的，就是当关闭页面的时候这个地址就会消失，这个东西就像快捷方式一样，并不是一个实物
      //如果要数据被保存下来，可以将其上传到服务器或者保存在本地的文件系统里面

    // let url = URL.createObjectURL(data);
    // console.log(url);   //结果为blob:http://localhost:3000/ce2033ff-e413-42af-9dcc-2577c3bf40a2，后面的是uuid
    // this.setState({
    //   src: url
    // })

    this.setState({
        src: URL.createObjectURL(data)
      })

  }

  render(){
    return (
      <div>
        <img src={this.state.src}/>
      </div>
    )
  }


}

export default TestImg;