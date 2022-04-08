import React from "react";
import "./home.css";
import { Menu } from "antd";

import {
  DesktopOutlined,
  ContainerOutlined,
  ApartmentOutlined,
} from "@ant-design/icons";
import {useState} from "react"
import DataSearch from "./dataSearch";
import DataStatistics from "./dataStatistics";
import DataDownload from "./dataDownload"
let select = [true, false, false];

function Home() {
  const [state,setState] = useState(select);
  const selectItem = (e) => {
    select.forEach((item, index) => {
      select[index] = false;
    });
    select[e.key - 1] = true;
    setState([...select])
  };
  return (
    <div className="home">
      <Menu
        defaultSelectedKeys={["1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={false}
        onClick={selectItem}
        className="nav"
      >
        <Menu.Item key="1" icon={<DesktopOutlined />}>
          数据查询
        </Menu.Item>
        <Menu.Item key="2" icon={<ContainerOutlined />}>
          数据统计
        </Menu.Item>
        <Menu.Item key="3" icon={<ApartmentOutlined />}>
          数据加载
        </Menu.Item>
      </Menu>
      {state[0]&&<DataSearch />}
      {state[1]&&<DataStatistics/>}
      {state[2]&&<DataDownload/>}
    </div>
  );
}
export default Home;
