import React, {Component} from "react";
import { Form, Row, Col, Input, Button, Icon } from 'antd';

class AdvancedSearchForm extends React.Component {
  constructor(...args){
    super(...args);
    this.state = {
      expand: true,
    };
  }

  // To generate mock Form.Item
  getFields() {
    const mylabel = ['井名称','开钻日期','完钻日期','投产日期','设计井深','完钻井深','人工井底','井状态','完井方式','井型','井别','日产液','日产油','日产气','含水率'];
    const count = this.state.expand ? 15 : 6;
    const { getFieldDecorator } = this.props.form;
    const children = [];
    for (let i = 0; i < 15; i++) {
      children.push(
        <Col span={7} key={i} style={{ display: i < count ? 'block' : 'none' }}>
          <Form.Item label={mylabel[i]}>
            {getFieldDecorator(`field-${i}`, {
              rules: [
                {
                  required: true,
                  message: 'Input something!',
                },
              ],
            })(<Input placeholder="placeholder" />)}
          </Form.Item>
        </Col>,
      );
    }
    return children;
  }

  handleSearch(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  };

  render() {
    return (
      <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
        <Row gutter={24}>{this.getFields()}</Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">
              下一步
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

const WellBaseDataTable = Form.create({ name: 'advanced_search' })(AdvancedSearchForm);

export default WellBaseDataTable;