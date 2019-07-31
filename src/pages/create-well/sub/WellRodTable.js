import React,{Component} from "react";
import { Table, Input, Button, Popconfirm, Form } from 'antd';
import '../../../../备份/yf/table-solvewidth.css';

const EditableContext = React.createContext();


const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends Component {

  constructor(...args){
    super(...args);
    this.state = {
      editing: false,
    };
  }

  toggleEdit(){
    const editing = true;
    this.setState({ editing }, () => {
      if (editing) {
        this.input.focus();
      }
    });

  };

  save(e){
    const { record, handleSave } = this.props;
    this.form.validateFields((error, values) => {
      if (error && error[e.currentTarget.id]) {
        return;
      }
      /*this.toggleEdit();*/
      handleSave({ ...record, ...values });
      console.log(values);
    });
  };

  /*renderCell(form){
    this.form = form;
    const { children, dataIndex, record, title } = this.props;
    const { editing } = this.state;
    return editing ? (
      <Form.Item style={{ margin: 0 }}>
        {form.getFieldDecorator(dataIndex, {
          initialValue: record[dataIndex],
        })(<Input
          ref={node => (this.input = node)}
          onPressEnter={this.save.bind(this)}
          onBlur={this.save.bind(this)}
          style={{width:'60px',height:'25px',fontSize:'10px',align:'center',padding:'0px',margin:'0px'}}
        />)}
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 10 , align: 'center'}}
        onClick={this.toggleEdit.bind(this)}
      >
        {children}
      </div>
    );
  };*/

  renderCell(form){
    this.form = form;
    const { children, dataIndex, record, title } = this.props;
    const { editing } = this.state;
    return (
      <Form.Item style={{ margin: 0 }}>
        {form.getFieldDecorator(dataIndex, {
          initialValue: record[dataIndex],
        })(<Input
          ref={node => (this.input = node)}
          onPressEnter={this.save.bind(this)}
          onBlur={this.save.bind(this)}
          style={{width:'55px',height:'25px',fontSize:'10px',align:'center',padding:'0px',margin:'0px'}}
        />)}
      </Form.Item>
    );
  };

  render() {
    const {
      editable,
      dataIndex,
      title,
      record,
      index,
      handleSave,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editable ? (
          <EditableContext.Consumer>{this.renderCell.bind(this)}</EditableContext.Consumer>
        ) : (
          children
        )}
      </td>
    );
  }
}

class WellRodTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: '序号',
        dataIndex: 'orderId',
        width: '15%',
        editable: true,
      },
      {
        title: '名称',
        dataIndex: 'name',
        width: '15%',
        editable: true,
      },
      {
        title: '外径(mm)',
        dataIndex: 'diaOut',
        width: '15%',
        editable: true,
      },
      {
        title: '长度(m)',
        dataIndex: 'length',
        width: '15%',
        editable: true,
      },
      {
        title: '下深(m)',
        dataIndex: 'depth',
        width: '15%',
        editable: true,
      },
      {
        title: '操作',
        dataIndex: 'memo',
        width: '15%',
        render: (text, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
              <a href="javascript:;">Delete</a>
            </Popconfirm>
          ) : null,
      },
    ];

    this.state = {
      dataSource: [
        {
          key: '0',
          orderId: '',
          name: '',
          diaOut: '',
          length: '',
          depth: '',
        }
      ],
      count: 1,
    };
  }

  /*删除功能*/
  handleDelete(key){
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  };

  /*添加一行功能*/
  handleAdd(){
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      orderId: '',
      name: '',
      diaOut: '',
      length: '',
      depth: '',
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };


  /*保存功能*/
  handleSave(row){
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    this.setState({ dataSource: newData });
  };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave.bind(this),
        }),
      };
    });
    return (
      <div>
        <Button onClick={this.handleAdd.bind(this)} type="primary" style={{ marginBottom: 16 }}>
          Add a row
        </Button>
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns}
          size="small"
          pagination={false}
          expandRowByClick={false}
          align="center"
          padding="0px"
          margin="0px"
        />
      </div>
    );
  }
}

export default WellRodTable;