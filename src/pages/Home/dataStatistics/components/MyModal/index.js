import { Modal } from "antd";
import "./index.css";
import PieChart from "../PieChart";
import LineChart from "../LineChart";
const MyModal = (props) => {
  return (
    <>
      <Modal
        title={props.title}
        visible={props.visible}
        onOk={props.onOk}
        onCancel={props.onCancel}
        width={1000}
      >
        <div className="chart">
          <PieChart />
          <LineChart />
        </div>
      </Modal>
    </>
  );
};

export default MyModal;
