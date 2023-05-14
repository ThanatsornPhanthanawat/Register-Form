import { Card, Row, Col, Input, Form, DatePicker, InputNumber, Typography, Checkbox, Button, Image } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

function Register() {
    const navigate = useNavigate();
    const onFinish = async (values) => {
        try {
          const post = {
            firstname: values.firstname,
            lastname: values.lastname,
            email: values.email,
            password: values.password,
            date: dayjs(values.date).format("YYYY-MM-DD"),
          };
          console.log(post);
    
          localStorage.setItem("userInfo", JSON.stringify(post));
        } catch (err) {
          alert(err);
        } finally {
          navigate("/personal");
        }
      };
  return (
    <div>
      <Card>
          <Typography.Title
            level={2}
            style={{
              fontWeight: 300,
              marginTop: 10,
              marginBottom: 40,
            }}
          >
            Register
          </Typography.Title>
          <Form onFinish={onFinish}>
            <Row gutter={[12, 12]}>
              <Col span={12}>
                <Form.Item name="firstname">
                  <Input placeholder="First name" size="large" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="lastname">
                  <Input placeholder="Last name" size="large" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[12, 0]}>
              <Col span={24}>
                <Form.Item name="email">
                  <Input
                    placeholder="Username"
                    size="large"
                    suffix={<>@gmail.com</>}
                  />
                </Form.Item>
                <Typography.Text
                    
                    type="secondary"
                  >
                    You can use letters, numbers & periods
                  </Typography.Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Item name="date">
                  <DatePicker size="large" placeholder="Birth Date" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[12, 0]}>
              <Col span={12}>
                <Form.Item name="password">
                  <Input.Password placeholder="Password" size="large" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="confirmPassword">
                  <Input.Password placeholder="Confirm" size="large" />
                </Form.Item>
              </Col>
              <Typography.Text style={{ marginLeft: 15 }} type="secondary">
                Use 8 or more characters with a mix of letters, number & symbols
              </Typography.Text>
            </Row>
            
            <Row align="middle" justify="space-between">
              <Col>
                <Typography.Text
                  strong
                  style={{
                    color: "#4285F4",
                  }}
                >
                  Sign in instead
                </Typography.Text>
              </Col>
              <Col>
                <Button
                  type="primary"
                  size="large"
                  style={{
                    padding: "0 20px",
                  }} htmlType="submit"
                 
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Card>
    </div>
  );
}

export default Register;
