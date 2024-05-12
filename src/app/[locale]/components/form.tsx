"use client";

import React from "react";
import {
  Alert,
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
import { DataType } from "../form/page";
import { useTranslations } from "next-intl";

export default function FormAntd({
  data,
  setData,
}: {
  data: DataType[];
  setData: (data: DataType[]) => void;
}) {
    // const t = useTranslations('Form');
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    const ConvertValue = {
      key: values.idNumber,
      name: values.firstName + ` ` + values.lastName,
      gender: values.gender,
      phone: values.phone,
      nationality: values.nationality,
      action: values.idNumber,
    };
    var getKey =   Math.random().toString(16).slice(2)
    try {
      setData([...data, { key: getKey, ...ConvertValue }] );
      form.resetFields();


      //  set Local Storage
      try { 
        localStorage.setItem("employee", JSON.stringify([...data, { key: getKey, ...ConvertValue }] ));
      } catch (error) {
        console.log(error);
       } 


      alert("Employee Added Successfully");

    } catch (error) {
      console.log(error);
      alert("Error");
    }

  


  };

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
    <Form
      {...formItemLayout}
      variant="filled"
      style={{ maxWidth: 700 }}
      form={form}
      onFinish={onFinish}
    >
      <h3 className="mb-5"> 
        {/* {t('title')} */}
        Add Employee
      </h3>

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
            <Input style={{ width: "100%" }} placeholder="Thai" />
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
            name="phone"
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

      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button type="primary" htmlType="submit" className="me-2">
          Submit
        </Button>
        <Button
 className="me-2"
          onClick={() => {
            form.resetFields();
          }}
        
        >Reset</Button>
        
      </Form.Item>
    </Form>
  );
}
