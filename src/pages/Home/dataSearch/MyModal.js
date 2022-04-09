import React, { useState } from "react";
import { Modal, Button } from "antd";
import "./index.css";
import {
  Player,
  ControlBar,
  PlayToggle, // PlayToggle 播放/暂停按钮 若需禁止加 disabled
  ReplayControl, // 后退按钮
  ForwardControl, // 前进按钮
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton, // 倍速播放选项
  VolumeMenuButton,
} from "video-react";
import "../../../../node_modules/video-react/dist/video-react.css"; // import css
import path from "../../../video/test.mp4";
import image1 from "../../../image/test1.jpg";
import image2 from "../../../image/test2.jpg";
import image3 from "../../../image/test3.jpg";
import image4 from "../../../image/test4.jpg";
// const DataFormValue = [
//   { formId: "0", value: "video" },
//   { formId: "1", value: "photo" },
//   { formId: "2", value: "text" },
// ];

const typeSelect = [true, false, false];

const MyModal = (props) => {
  if (props.type === "video") {
    typeSelect.forEach((item, index) => {
      typeSelect[index] = false;
    });
    typeSelect[0] = true;
  } else if (props.type === "photo") {
    typeSelect.forEach((item, index) => {
      typeSelect[index] = false;
    });
    typeSelect[1] = true;
  } else if (props.type === "text") {
    typeSelect.forEach((item, index) => {
      typeSelect[index] = false;
    });
    typeSelect[2] = true;
  }
  const [state, setState] = useState(typeSelect);

  const change = (index) => {
    typeSelect.forEach((item, index) => {
      typeSelect[index] = false;
    });
    typeSelect[index] = true;
    setState([...typeSelect]);
  };

  return (
    <>
      <Modal
        title={props.title}
        visible={props.visible}
        onOk={props.onOk}
        onCancel={props.onCancel}
        width={800}
      >
        <div className="dataForm">
          {/* <div style={{ display: "flex", justifyContent: "space-around" }}>
            {DataFormValue.map((item, index) => {
              return (
                <Button onClick={() => change(index)}>{item.value}</Button>
              );
            })}
          </div> */}
          {state[0] && (
            <div style={{ marginTop: 50, marginLeft: 120 }}>
              <Player fluid={false} width={500} height={300}>
                <source src={path} type="video/mp4" />
                <ControlBar autoHide={false} disableDefaultControls={false}>
                  <ReplayControl seconds={10} order={1.1} />
                  <ForwardControl seconds={30} order={1.2} />
                  <PlayToggle />
                  <CurrentTimeDisplay order={4.1} />
                  <TimeDivider order={4.2} />
                  <PlaybackRateMenuButton
                    rates={[5, 2, 1.5, 1, 0.5]}
                    order={7.1}
                  />
                  <VolumeMenuButton />
                </ControlBar>
              </Player>
            </div>
          )}
          {state[1] && (
            <div className="image">
              <img src={image1} alt="img" className="img"></img>
              <img src={image2} className="img" alt="img"></img>
              <img src={image3} className="img" alt="img"></img>
              <img src={image4} className="img" alt="img"></img>
            </div>
          )}
          {state[2] && (
            <div style={{ marginTop: 50, marginLeft: 200 }}>
              66666666666666666
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};
export default MyModal;
