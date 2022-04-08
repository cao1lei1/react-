import React from "react";
import "./index.css";
import { Input, Table, Space, Button, Tag } from "antd";
import { useState } from "react";

import MyModal from "./MyModal";
const { Search } = Input;

const data = [
  {
    key: "1",
    name: "王梦婷",
    ID: 32,
    userState: "Inactive",
    signInTime: "2022-03-24 12:00:00",
    signUpTime: "2022-03-24 12:00:00",
    dataNums: 12,
  },
  {
    key: "2",
    name: "王梦婷",
    ID: 32,
    userState: "Inactive",
    signInTime: "2022-03-24 12:00:00",
    signUpTime: "2022-03-24 12:00:00",
    dataNums: 12,
  },
  {
    key: "3",
    name: "王梦婷",
    ID: 32,
    userState: "Inactive",
    signInTime: "2022-03-24 12:00:00",
    signUpTime: "2022-03-24 12:00:00",
    dataNums: 12,
  },
];

for (let i in data) {
  data[i].subData = [];
  for (let j = 0; j < 3; ++j) {
    data[i].subData.push({
      key: j + 1,
      ID: "000000",
      time: "2022-03-24 12:00:00",
      eventID: "000000",
    });
  }
}

function DataSearch() {
  const [data1, setState1] = useState(data);
  const columns = [
    { title: "姓名", dataIndex: "name", key: "name" },
    { title: "标识ID", dataIndex: "ID", key: "ID" },
    { title: "用户状态", dataIndex: "userState", key: "userState" },
    {
      title: "用户上次登陆时间",
      dataIndex: "signInTime",
      key: "signInTime",
    },
    { title: "用户注册时间", dataIndex: "signUpTime", key: "signUpTime" },
    { title: "用户上报数据条数", dataIndex: "dataNums", key: "dataNums" },
    {
      title: "操作",
      key: "operation",
      render: (text, record, index) => (
        <a onClick={(e) => deleteData1(text, record, index)}>Delete</a>
      ),
    },
  ];

  const onSearch = (value) => console.log(value);

  const deleteData1 = (e, text, record, index) => {
    data1.splice(index, 1);
    setState1([...data1]);
  };

  const expandedRowRender = (record, index) => {
    const columns = [
      {
        title: "序号",
        key: "num",
        render: (text, record, indexKey) => <div>{indexKey + 1}</div>,
      },
      { title: "上报数据ID", dataIndex: "ID", key: "ID" },
      { title: "上报时间", dataIndex: "time", key: "time" },
      { title: "归属事件ID", dataIndex: "eventID", key: "eventID" },
      {
        title: "上报数据类型",
        key: "type",
        render: () => (
          <div>
            <span>
              <Tag color="magenta">video</Tag>
            </span>
            <span>
              <Tag color="blue">text</Tag>
            </span>
            <span>
              <Tag color="green">photo</Tag>
            </span>
          </div>
        ),
      },
      {
        title: "操作",
        dataIndex: "operation",
        key: "operation",
        render: (text, record, index2) => (
          <Space size="middle">
            <Button
              onClick={(e) => show(text, record, index2)}
              className="btn_show"
            >
              查看
            </Button>
            <Button
              onClick={(e) => deleteData(text, record, index2)}
              className="btn_delete"
            >
              删除
            </Button>
          </Space>
        ),
      },
    ];

    const show = (text, record, index2) => {
      setIsModalVisible(true);
      console.log(isModalVisible);
    };

    const deleteData = (text, record, index2) => {
      console.log(index);
      console.log(index2);
      let temp = [...data1[index].subData];
      temp.splice(index2, 1);
      data1[index].subData = temp;
      setState1([...data1]);
    };

    return (
      <Table
        columns={columns}
        dataSource={data1[index].subData}
        pagination={false}
      />
    );
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <div className="content">
        <div className="header">
          <Search
            placeholder="输入用户ID进行搜索"
            allowClear
            enterButton="搜索"
            size="large"
            onSearch={onSearch}
            className="input"
          />
        </div>
        <div className="container">
          <Table
            className="components-table-demo-nested"
            columns={columns}
            expandable={{ expandedRowRender }}
            dataSource={data1}
          />
        </div>
      </div>
      <MyModal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        title="数据内容显示"
      />
    </div>
  );
}
export default DataSearch;
