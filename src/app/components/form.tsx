import React from "react";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Select,
  TreeSelect,
} from "antd";

export default function FormAntd() {
  const formItemLayout = {
    // labelCol: {
    //   xs: { span: 24 },
    //   sm: { span: 6 },
    // },
    // wrapperCol: {
    //   xs: { span: 24 },
    //   sm: { span: 14 },
    // },
  };
  return (
    <Form {...formItemLayout} variant="filled" style={{ maxWidth: 700 }}>
      <h3 className="mb-5">Create New Employee</h3>

      <div className="row">
        <div className="col-md-3">
          <Form.Item
            label="Gender"
            name="gender"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Select
              placeholder="Select Gender"
              allowClear
              options={[
                { value: "men", label: "Men" },
                {
                  value: "women",
                  label: "Women",
                },
                {
                  value: "other",
                  label: "Other",
                },
              ]}
            />
          </Form.Item>
        </div>
        <div className="col-md-4">
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input style={{ width: "100%" }} />
          </Form.Item>
        </div>
        <div className="col-md-4">
          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input style={{ width: "100%" }} />
          </Form.Item>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <Form.Item
            label="Birth Date"
            name="birthDate"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <DatePicker format="DD-MM-YYYY" />
          </Form.Item>
        </div>
        <div className="col-md-6">
          <Form.Item
            label="Nationality"
            name="nationality"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Select
              style={{ width: "100%" }}
              placeholder="Select National Type"
            />
          </Form.Item>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <Form.Item
            label="ID Number"
            name="idNumber"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>
        </div>
      </div>

      {/* <div className="row">
        <div className="col-md-12">
            <Form.Item
                label="Phone Number"
                name="phoneNumber"
                rules={[{ required: true, message: "Please input!" }]}
            >
                <InputNumber style={{ width: "100%" }} />
            </Form.Item>
        </div>
    </div> */}

      <div className="row">
        <div className="col-md-12">
          <Form.Item
            label="Passport Number"
            name="passport"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input style={{ width: "100%" }} />
          </Form.Item>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <Form.Item
            label="Phone Number"
            name="phoneNumber"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <Form.Item
            label="Expected Salary (THB)"
            name="ExpectedSalary"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>
        </div>
      </div>

      {/* <Form.Item
        label="TextArea"
        name="TextArea"
        rules={[{ required: true, message: "Please input!" }]}
    >
        <Input.TextArea />
    </Form.Item>

    <Form.Item
        label="Mentions"
        name="Mentions"
        rules={[{ required: true, message: "Please input!" }]}
    >
        <Mentions />
    </Form.Item>

    <Form.Item
        label="Select"
        name="Select"
        rules={[{ required: true, message: "Please input!" }]}
    >
        <Select />
    </Form.Item>

    <Form.Item
        label="Cascader"
        name="Cascader"
        rules={[{ required: true, message: "Please input!" }]}
    >
        <Cascader />
    </Form.Item>

    <Form.Item
        label="TreeSelect"
        name="TreeSelect"
        rules={[{ required: true, message: "Please input!" }]}
    >
        <TreeSelect />
    </Form.Item> */}
      {/* 
<Form.Item
label="DatePicker"
name="DatePicker"
rules={[{ required: true, message: "Please input!" }]}
>
<DatePicker />
</Form.Item> */}

      {/* <Form.Item
        label="RangePicker"
        name="RangePicker"
        rules={[{ required: true, message: "Please input!" }]}
    >
        <RangePicker />
    </Form.Item> */}

      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button type="primary" htmlType="submit" className="me-2">
          Submit
        </Button>
        <Button>Reset</Button>
      </Form.Item>
    </Form>
  );
}
