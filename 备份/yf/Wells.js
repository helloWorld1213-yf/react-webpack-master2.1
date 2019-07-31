import React, {Component} from 'react';
import {Button} from 'antd';

import axios from 'axios';

export default class Wells extends Component{
  constructor(...args){
    super(...args);
  }

  async submit(){
    alert('aaa');
  }

  render(){
    return(
      <div>
        <div>搜索框</div>

        <div>列表展示</div>
      </div>
    )
  }
}