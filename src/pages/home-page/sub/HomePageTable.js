import React,{Component} from "react";
import { Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';
import {Link} from 'react-router-dom';

const data = [
  {
    key: '1',
    wellName: 'QWE123',
    tdWellClass: '油气井',
    startDate:'2018-4-27',
    wellState:'修井中',
    details:'查看详情',
    delete:'删除'
  },
  {
    key: '2',
    wellName: 'ASD123',
    tdWellClass: '油气井',
    startDate:'2018-5-27',
    wellState:'已停止',
    details:'查看详情',
    delete:'删除'
  },
  {
    key: '3',
    wellName: 'SAH678',
    tdWellClass: '油气井',
    startDate:'2019-5-1',
    wellState:'已完成',
    details:'查看详情',
    delete:'删除'
  },
  {
    key: '4',
    wellName: 'GIU099',
    tdWellClass: '油气井',
    startDate:'2016-3-27',
    wellState:'已停止',
    details:'查看详情',
    delete:'删除'
  },
];

class HomePageTable extends Component{
  constructor(...args){
    super(...args);
    this.state= {
      searchText: ''
    }
  }

  /*功能区*/
  getColumnSearchProps(dataIndex){
    return ({
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            ref={node => {
              this.searchInput = node;
            }}
            placeholder={`${dataIndex}`}
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm)}
            icon="search"
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      filterIcon: filtered => (
        <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined , padding:'0px'}} />
      ),
      onFilter: (value, record) =>
        record[dataIndex]
          .toString()
          .toLowerCase()
          .includes(value.toLowerCase()),
      onFilterDropdownVisibleChange: visible => {
        if (visible) {
          setTimeout(() => this.searchInput.select());
        }
      },
      render: text => (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ),
    })
  }
  handleSearch(selectedKeys, confirm){
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  }
  handleReset(clearFilters){
    clearFilters();
    this.setState({ searchText: '' });
  }


  render() {
    const columns = [
      {
        title: '井名称',
        dataIndex: 'wellName',
        key: 'wellName',
        ...this.getColumnSearchProps('wellName'),
      },
      {
        title: '井类型',
        dataIndex: 'tdWellClass',
        key: 'tdWellClass',
        ...this.getColumnSearchProps('tdWellClass'),
      },
      {
        title: '井创建时间',
        dataIndex: 'startDate',
        key: 'startDate',
        ...this.getColumnSearchProps('startDate'),
      },
      {
        title: '井状态',
        dataIndex: 'wellState',
        key: 'wellState',
        ...this.getColumnSearchProps('wellState'),
      },
      {
        title: '',
        dataIndex: 'details',
        render: () =>(
          <Link to="/create-well">查看详情</Link>
        )
      },
      {
        title: '',
        dataIndex: 'delete',
        render: () =>(
          <Link to="/create-well">删除</Link>
        )
      },
    ];
    return <Table columns={columns} dataSource={data} bordered/>;
  }
}

export default HomePageTable;