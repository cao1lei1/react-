import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Column } from "@ant-design/plots";
import "./index.css";
const Histogram = (props) => {
  
  const data = [];
  data.push({ type: "video", nums: props.data.video });
  data.push({ type: "photo", nums: props.data.photo });
  data.push({ type: "total", nums: props.data.totalNums });
  const config = {
    data,
    xField: "type",
    yField: "nums",
    label: {
      // 可手动配置 label 数据标签位置
      position: "middle",
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "类别",
      },
      sales: {
        alias: "销售额",
      },
    },
  };
  return <Column {...config} className="histogramStyle" />;
};

export default Histogram;
