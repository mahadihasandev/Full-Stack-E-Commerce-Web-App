import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();

  const onFinish = async (values) => {
    let data = await axios.post("http://localhost:8000/api/v1/login", {
      email: values.email,
      password: values.password,
    });
    if (data.data.error == "user does not exist") {
      toast.error(data.data.error);
    } else if (!data.data.emailVerified) {
      toast.error("varify your email");
    } else {
      navigate("/home");
      toast.success("Login success");
    }
  };
  const onFinishFailed = (errorInfo) => {
    navigate(`/error/${errorInfo}`);
  };

  return (
    <div>
      <div className="flex flex-col pt-48 pr-48 items-center bg-[#0c3635] h-screen">
        <h1 className="mb-5 ml-24 text-[#ffffff] font-sans">
          {" "}
          Dashboard Registration
        </h1>

        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="light"
        />

        <Form
          name="basic"
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 17 }}
          style={{ maxWidth: 400 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label={
              <span style={{ color: "#ffffff", paddingRight: "25px" }}>
                Email
              </span>
            }
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input style={{ width: "180%", padding: "10px" }} />
          </Form.Item>

          <Form.Item
            label={<span style={{ color: "#ffffff" }}>Password</span>}
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password style={{ width: "180%", padding: "10px" }} />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" label={null}>
            <Checkbox style={{ color: "#ffffff" }}>Remember me</Checkbox>
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <Link to="/forgetpassword">Forget password ?</Link>
      </div>
    </div>
  );
}

export default Login;
