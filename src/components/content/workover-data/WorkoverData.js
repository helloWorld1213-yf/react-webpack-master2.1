import React, { Component,Fragment } from "react";
import { Input,Button  } from 'antd';
import '../../css/WorkoverData/WorkoverData.css'
import {connect} from "react-redux";
import store from '../../Actions/store'

class WorkoverData extends Component {
    constructor(props) {
        super(props);
        this.state={
            inputValue:"",
            modifyShow:false,
            addShow:false,
            list:[]
        };
        this.state=store.getState();
        this.display=this.display.bind(this);
        this.modifyDisplay=this.modifyDisplay.bind(this);
        this.addDisplay=this.addDisplay.bind(this);
        this.downloadClick=this.downloadClick.bind(this);
        this.searchBtnClick=this.searchBtnClick.bind(this);
    }
    render() {
        const { TextArea } = Input;
        return (
            <Fragment>
                <br/><br/>
                <h1>作业标准</h1>
                <hr/>
                <br/>
                <div className="WorkoverData-header">
                    <span>标准名称</span>
                    <Input placeholder="项目名称"
                           className="WorkoverData-searchInput"
                           value={this.props.searchValue}
                           onChange={this.props.changeSearchValue}
                    />
                    <Button type="primary" className="WorkoverData-searchBtn">查询</Button>
                    <Button type="primary"
                            className="WorkoverData-newStanderBtn"
                            onClick={this.addDisplay}
                    >新增标准</Button>
                </div>

                <br/><br/><br/>

                <div className="WorkoverData-table">
                    <table align="center" border="1" width="70%" height="auto">
                        <tbody>
                        <tr bgcolor='#f8f8ff'  height="40px" align="center">
                            <td colSpan="5" align="center">修井标准</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr bgcolor='#f8f8ff' height="35px" align="center">
                            <td width="8%">序号</td>
                            <td width="30%">标准名称</td>
                            <td width="42%">适用范围</td>
                            <td width="10%">附件下载</td>
                            <td width="10%">操作</td>
                        </tr>
                        </tbody>

                        {/* 列表循环数据 */}
                        {this.state.list.map((item,index)=>{
                        return (
                        <tbody key={index}>
                        <tr align="center"  height="35px">
                            <td width="8%">{index+1}</td>
                            <td width="30%">{item.standerName}</td>
                            <td width="42%">{item.rangeName}</td>
                            <td width="10%">
                                <span>下载</span>
                            </td>
                            <td width="10%">
                                <span onClick={this.modifyDisplay}>编辑
                                </span>   &#8195;
                                <span onClick={this.deleteBtnClick.bind(this,index)}>删除</span>

                            </td>
                        </tr>
                        </tbody>
                        )})
                        }

                    </table>
                </div>


                {/*弹窗出来的添加界面 使用三目运算符类似实现 v-if 不要忘记jsx中可以直接写js哦*/}
                <div>
                    {
                        this.state.addShow
                            ?
                            <div className="WorkoverData-alert">
                                <div className="WorkoverData-alertHeader">
                                    <span>添加新标准</span>

                                    <div className="WorkoverData-alertHeaderX"
                                         onClick={this.addDisplay}
                                         >X
                                    </div>
                                </div>
                                <div className="WorkoverData-standerInput">
                                    <span>标准名称</span>
                                    <Input style={{marginLeft:'25px',width:"80%"}}
                                           placeholder=""
                                           value={this.props.newStanderName}
                                           onChange={this.props.changeNewStanderName}
                                    />
                                </div>
                                <div className="WorkoverData-standerInput">
                                    <span>适用范围</span>
                                    <TextArea
                                        rows={4}
                                        style={{width:"80%",marginLeft:'25px'}}
                                        value={this.props.newRangeName}
                                        onChange={this.props.changeNewRangeName}
                                    />
                                </div>
                                <div>
                                    <span className="WorkoverData-submitLeft">案例文件</span>
                                    <button className="WorkoverData-chooseFile">选择文件</button>
                                    <span>(未选择任何文件)</span>
                                    <Button className="WorkoverData-updateBtn" type="primary" shape="round">
                                        更新
                                    </Button>
                                    <Button type="primary" shape="round" onClick={this.addDisplay}>
                                        取消
                                    </Button>
                                </div>
                            </div>
                            :
                            null
                    }
                </div>

                {/* 修改的弹出界面 */}
                <div>
                    {
                        this.state.modifyShow
                            ?
                            <div className="WorkoverData-alert">
                                <div className="WorkoverData-alertHeader">
                                    <span>修改标准</span>

                                    <div className="WorkoverData-alertHeaderX"
                                         onClick={this.modifyDisplay
                                         }>X
                                    </div>
                                </div>
                                <div className="WorkoverData-standerInput">
                                    <span>标准名称</span>
                                    <Input style={{marginLeft:'25px',width:"80%"}}
                                           placeholder=""
                                           value={this.props.modifyStanderName}
                                           onChange={this.props.changeModifyStanderName}
                                    />
                                </div>
                                <div className="WorkoverData-standerInput">
                                    <span>适用范围</span>
                                    <TextArea
                                        rows={4}
                                        style={{width:"80%",marginLeft:'25px'}}
                                        value={this.props.modifyRangeName}
                                        onChange={this.props.changeModifyRangeName}
                                    />
                                </div>
                                <div>
                                    <span className="WorkoverData-submitLeft">案例文件</span>
                                    <button className="WorkoverData-chooseFile">选择文件</button>
                                    <span>(未选择任何文件)</span>
                                    <Button className="WorkoverData-updateBtn" type="primary" shape="round">
                                        更新
                                    </Button>
                                    <Button type="primary" shape="round" onClick={this.modifyDisplay}>
                                        取消
                                    </Button>
                                </div>
                            </div>
                            :
                            null
                    }
                </div>
            </Fragment>

        );
    }
    componentDidMount() {
       // console.log(this.props.match.params.aid)
        // 这里就是动态路由传值
    }
    display() {
        this.setState({
            show: !this.state.show
        })
    }

    searchInputChange(e) {

    }

    /*修改界面状态改变函数*/
    modifyDisplay() {
        this.setState({
            modifyShow:!this.state.modifyShow
        })
    }

    /*添加状态改变函数*/
    addDisplay() {
        this.setState({
            addShow:!this.state.addShow
        })
    }

    downloadClick(){

    }

    searchBtnClick(){

    }
    deleteBtnClick(index){
        this.props.delete(index);
    }
}

const mapStateToProps = (store) => {
    // state指的就是store中的数据
    // 这里的state.searchValue 指的是store中的searchValue
    // return出来的就是映射到props中的值
    return {
        searchValue: store.searchValue,
        newStanderName:store.newStanderName,
        newRangeName:store.newRangeName,
        modifyStanderName:store.modifyStanderName,
        modifyRangeName:store.modifyRangeName
    }
};

//    mapDispatch指的是store.dispatch,props就是指的是props
//    这里的dispatch方法指的就是store.dispatch方法
const mapDispatchToProps = (dispatch) => {
    return {
        changeSearchValue(e){
            const action= {
                type: 'change_search_input_value',
                value:e.target.value
            };
            dispatch(action);
        },

        changeNewStanderName(e){
            const action= {
                type: 'change_new_stander_name',
                value:e.target.value
            };
            dispatch(action);
        },

        changeNewRangeName(e){
            const action= {
                type: 'change_new_range_name',
                value:e.target.value
            };
            dispatch(action);
        },

        changeModifyStanderName(e){
            const action= {
                type: 'change_modify_stander_name',
                value:e.target.value
            };
            dispatch(action);
        },

        changeModifyRangeName(e){
            const action= {
                type: 'change_modify_range_name',
                value:e.target.value
            };
            dispatch(action);
        },
        delete(index) {
            const action= {
                type: 'delete_list',
                value:index
            };
            dispatch(action);
        }

    };
};
export default connect(mapStateToProps,mapDispatchToProps)(WorkoverData);
