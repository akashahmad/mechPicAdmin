import { Divider, Form, Input, Button } from "antd";
import Logo from "../components/atoms/logo";
import Heading from "../components/atoms/heading";
import Card from "../components/atoms/card";
import LoginTemplates from "../components/templates/loginTemplates";
const Login = () => {
  const [form] = Form.useForm();

  const onFinish = () => {};
  return (
    <LoginTemplates>
      <Logo />
      <Divider
        style={{
          borderTop: "white",
        }}
      />
      <Heading heading="Login" />
      <Divider
        style={{
          borderTop: "white",
        }}
      />
      <Card>
        <Form form={form} name="Login font-weight-bold" onFinish={onFinish}>
          <Form.Item
            label=""
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input className="rounded-3xl" placeholder="Email address" />
          </Form.Item>
          <Form.Item
            label=""
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input className="rounded-3xl " placeholder="Password" />
          </Form.Item>
          <p className="text-base clr-darkblue cursor-pointer my-3">
            Forget Password?
          </p>
          <div className="text-center my-4">
            <Button
              type="primary"
              className="bg-clr-skyblue rounded-3xl py-1 px-24"
              htmlType="submit"
            >
              Login
            </Button>
          </div>
          <p className="text-base clr-darkblue cursor-pointer my-3">
            New to this website? Create Account
          </p>
          <div className="text-center my-4">
            <Button
              type="primary"
              className="bg-clr-darkblue rounded-3xl py-1 px-24"
              htmlType="submit"
            >
              Sign Up
            </Button>
          </div>
        </Form>
      </Card>
      <Divider
        style={{
          borderTop: "white",
        }}
      />
    </LoginTemplates>
  );
};

export default Login;
