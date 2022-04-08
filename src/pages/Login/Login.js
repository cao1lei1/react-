import React from "react";
import LoginImage from "../../image/login.png";
import "./login.css";
import { Form, Input, Button, Menu, Alert, message } from "antd";
import { Navigate } from "react-router-dom";
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      current: "Login-in",
      isJump: false,
    };
  }

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  onFinish = (values) => {
    console.log("Success:", values);
    if (values.username && values.password) {
      this.setState({ isJump: true });
    } else {
      message.info("请填写账号或密码");
    }
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    const { current, isJump } = this.state;
    return (
      <div className="Login">
        <header className="Login-name">街区应急事件移动终端数据管理系统</header>
        <img src={LoginImage} alt="Login" className="Login-image" />
        {isJump && <Navigate to="../Home" replace={true} />}
        <div className="Form">
          <Menu
            onClick={this.handleClick}
            selectedKeys={[current]}
            mode="horizontal"
            className="Tabs-top"
          >
            <Menu.Item key="Login-in">登录</Menu.Item>
            <Menu.Item key="Login-up">注册</Menu.Item>
          </Menu>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="用户名"
              name="username"
              rules={[
                {
                  required: false,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[
                {
                  required: false,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit" style={{ width: 171 }}>
                点击登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;
