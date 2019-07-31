import React,{Component} from "react";

class Table extends Component{
  constructor(...args){
    super(...args);
  }

  render(){
    return (
      <div className="table">
        <table border="1" width="500px">
          <tr>
            <td>修井机名称</td>
            <td>修井机类型</td>
            <td>井创建事件</td>
            <td>所属油田</td>
            <td>所属作业区</td>
            <td>井状态</td>
            <td>操作</td>
          </tr>
          <tr>
            <td>GDN3764</td>
            <td>水平井</td>
            <td>2019-7-24</td>
            <td>胜利油田</td>
            <td>南区</td>
            <td>修井中</td>
            <td>删除</td>
          </tr>
        </table>
      </div>
    )
  }
}

export default Table;