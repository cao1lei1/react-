import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { DatePicker, TimePicker, Button } from "antd";
import moment from "moment";
import { SearchOutlined } from "@ant-design/icons";
import { Map, APILoader, Marker, Circle } from "@uiw/react-amap";
import MyModal from "./components/MyModal";

function DataStatistics() {
  const gps = [114.35444549850463, 30.540165291558274];
  const [pos, setPos] = useState([114.35444549850463, 30.540165291558274]);
  const key = "c6f7abab4ba2991e8f5ad340fc269fcd";

  function onChangeDate(date, dateString) {
    console.log(date, dateString);
  }

  function onChangeTime(time, timeString) {
    console.log(time, timeString);
  }

  function search() {
    // window.AMap.convertFrom(pos, 'gps', function (status, result) {
    //   if (result.info === 'ok') {
    //     var lnglats = result.locations; // Array.<LngLat>
    //     console.log(lnglats);
    //   }
    // });
  }

  const [isModalVisible, setIsModalVisible] = useState(false);
  const show = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="content">
      <div className="header">
        <DatePicker onChange={onChangeDate} />
        <TimePicker
          onChange={onChangeTime}
          defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
          style={{ marginLeft: 10 }}
        />
        <Button
          type="primary"
          icon={<SearchOutlined />}
          style={{ marginLeft: 10 }}
          onClick={search}
        >
          查询
        </Button>
      </div>
      <div className="container">
        <APILoader akay="6d2170bf86d80c3b2b84ca153cdbe1c2">
          <Map>
            {/* <Marker title="北京市" position={[114.35444549850463, 30.540165291558274]} /> */}
            {/* <Marker title="北京市" position={pos} /> */}
            <Example show={show} />
            <CircleLocation/>
          </Map>
        </APILoader>
      </div>
      <MyModal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        title="数据统计"
      ></MyModal>
    </div>
  );
}

const Example = (props) => {
  const [state, setState] = useState([114.35444549850463, 30.540165291558274]);

  useEffect(() => {
    window.AMap.convertFrom(state, "gps", function (state, result) {
      setState([result.locations[0].getLng(), result.locations[0].getLat()]);
    });
  }, []);

  return (
    <Marker title="北京市" position={state} onClick={props.show} children="" />
  );
};

const CircleLocation = () => {
  const [circleState, setStateCircle] = useState([114.35444549850463, 30.540165291558274]);

  useEffect(() => {
    window.AMap.convertFrom(circleState, "gps", function (state, result) {
      setStateCircle([result.locations[0].getLng(), result.locations[0].getLat()]);
    });
  }, []);
  return (
    <Circle
      visiable={true}
      radius={1000}
      strokeColor="#fff"
      strokeWeight={2}
      center={new window.AMap.LngLat(...circleState)}
    />
  );
};
export default DataStatistics;
