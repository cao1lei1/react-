import React from "react";
import "./index.css";
import { Input, Table, Space, Button, Tag } from "antd";
import { useState } from "react";

const { Search } = Input;

const data = [
  {
    key: "1",
    name: "Video",
  },
  {
    key: "2",
    name: "Photo",
  },
  {
    key: "3",
    name: "Text",
  },
];

for (let i in data) {
  data[i].subData = [];
  if (data[i].name === "Video") {
    for (let j = 0; j < 3; ++j) {
      data[i].subData.push({
        key: j + 1,
        fileName: "test",
        time: "2022-03-24 12:00:00",
        ID: "000000",
        dataID: "111111",
        path:require("../../../video/test.mp4")
      });
    }
  } else if (data[i].name === "Photo") {
    for (let j = 0; j < 3; ++j) {
      data[i].subData.push({
        key: j + 1,
        fileName: "cat",
        time: "2022-03-24 12:00:00",
        ID: "000000",
        dataID: "111111",
        path:require("../../../image/cat.jpg")
      });
    }
  } else {
    for (let j = 0; j < 3; ++j) {
      data[i].subData.push({
        key: j + 1,
        fileName: "wmt",
        time: "2022-03-24 12:00:00",
        ID: "000000",
        dataID: "111111",
        path:require("../../../image/cat.jpg")
      });
    }
  }
}
function DataDownload() {
  const [data1, setState1] = useState(data);
  const columns = [{ title: "类型", dataIndex: "name", key: "name" }];

  const onSearch = (value) => console.log(value);

  const download = (text, record, index, index2) => {
    console.log(data1[index].subData[index2]);
    console.log(record.path);
  };

  const expandedRowRender = (record, index) => {
    const columns = [
      {
        title: "序号",
        key: "num",
        render: (text, record, indexKey) => <div>{indexKey + 1}</div>,
      },
      { title: "文件名", dataIndex: "fileName", key: "fileName" },
      { title: "上传时间", dataIndex: "time", key: "time" },
      { title: "上传人ID", dataIndex: "ID", key: "ID" },
      { title: "上报数据ID", dataIndex: "dataID", key: "dataID" },
      {
        title: "操作",
        dataIndex: "operation",
        key: "operation",
        render: (text, record, index2) => (
          <Space size="middle">
            <Button
              onClick={(e) => download(text, record, index, index2)}
              style={{ backgroundColor: "#87d068" }}
            >
            <a href={record.path} download>
                下载
              </a>
            </Button>
          </Space>
        ),
      },
    ];

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
            placeholder="输入事件ID进行搜索"
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
            dataSource={data}
          />
        </div>
      </div>
    </div>
  );
}
export default DataDownload;
