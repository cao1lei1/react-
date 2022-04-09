import { Modal } from "antd";
import "./index.css";
import Histogram from "../Histogram";
import LineChart from "../LineChart";
const MyModal = (props) => {
  return (
    <>
      <Modal
        title={`事件(${props.eventId})${props.title}`}
        visible={props.visible}
        onOk={props.onOk}
        onCancel={props.onCancel}
        width={1000}
      >
        <div className="chart">
          <Histogram data={props.data} />
          <LineChart eventId={props.eventId}/>
        </div>
      </Modal>
    </>
  );
};

export default MyModal;
