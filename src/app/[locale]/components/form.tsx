"use client";

import React, { useEffect } from "react";
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
import { DataType, FormDataType } from "../form/page";
import { useTranslations } from "next-intl";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { addPost } from '@/lib/features/formEditIdSlice';

export default function FormAntd({
  localData,
  dataTable,
  data,
  setData,
  setDataTable,
   
}: {
  data: DataType[];
  setData: React.Dispatch<React.SetStateAction<DataType[]>>;
  localData: DataType[];
  dataTable: DataType[];
  setDataTable: (value: any) => void;
   
}) {

  // reduce
  const Edit  = useSelector((state: RootState) => state.form?.id);
  const dispatch = useDispatch();

  const [form] = Form.useForm();
  const isEdit = Edit !== "" ? true : false;
  const EiditID = Edit !== "" ? Edit : null;

  const onFinish = (values: any) => {
    var getKey = Math.random().toString(16).slice(2);

    try {
      try {
        localStorage.setItem(
          "employee",
          JSON.stringify([...localData, { key: getKey, ...values }])
        );
        setDataTable([
          ...dataTable,
          {
            key: getKey,
            name: values.firstName + ` ` + values.lastName,
            ...values,
          },
        ]);

        form.resetFields();
      } catch (error) {
        console.log(error);
      }

      alert("Employee Added Successfully");
    } catch (error) {
      console.log(error);
      alert("Error");
    }
  };

  function EditData() {
    const data: any[] = localData.filter((item) => item.key === EiditID);
    const newData = localData.filter((item) => item.key !== EiditID);

    try {
      localStorage.setItem(
        "employee",
        JSON.stringify([...newData, { key: EiditID, ...form.getFieldsValue() }])
      );

      setDataTable([
        ...dataTable,
        {
          key: EiditID,
          name:
            form.getFieldsValue().firstName +
            ` ` +
            form.getFieldsValue().lastName,
          ...form.getFieldsValue(),
        },
      ]);

      form.resetFields();
    } catch (error) {
      console.log(error);
    }

 
    dispatch(addPost(""));
    
    alert("Employee Updated Successfully");
  }

  const formItemLayout = { 
  };

  useEffect(() => {
    if (isEdit && localData) {
      const data: any[] = localData.filter((item) => item.key === EiditID);

      const ConvertDate = data && data[0].birthDate;
      const NewDate = dayjs(ConvertDate).format("DD-MM-YYYY");

      form.setFieldsValue({
        key: EiditID,
        gender: data && data[0].gender,
        firstName: data && data[0].firstName,
        lastName: data && data[0].lastName,
        birthDate: dayjs(ConvertDate),
        nationality: data && data[0].nationality,
        idNumber: data && data[0].idNumber,
        passport: data && data[0].passport,
        phone: data && data[0].phone,
        ExpectedSalary: data && data[0].ExpectedSalary,
      });
    }
  }, [Edit]);

  return (
    <Form
      {...formItemLayout}
      variant="filled"
      style={{ maxWidth: 700 }}
      form={form}
      onFinish={onFinish}
    >
      {isEdit && (
        <div>
          <Button onClick={() =>   dispatch(addPost(""))} className="mb-3">
            {`< Back`}{" "}
          </Button>
        </div>
      )}

      <h3 className="mb-5">
        {/* {t('title')} */}
        {isEdit ? <>Edit : ({EiditID} ) </> : "Add Employee"}
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
        {isEdit ? (
          <Button
            type="primary"
            htmlType="submit"
            className="me-2"
            onClick={EditData}
          >
            Update
          </Button>
        ) : (
          <Button type="primary" htmlType="submit" className="me-2">
            Submit
          </Button>
        )}

        <Button
          className="me-2"
          onClick={() => {
            form.resetFields();
          }}
        >
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
}
