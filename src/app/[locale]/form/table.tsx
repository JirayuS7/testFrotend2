"use client";
import React, { useState } from "react";
import { Button, Table } from "antd";
import type { TableColumnsType } from "antd";
import { DataType } from "./page";
 

 

export default function TableAntD({data , removeItem}: {data: DataType[] ,
    removeItem: (key: React.Key) => void

}) {

const columns: TableColumnsType<DataType> = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
        sorter: (a, b) => a.name.length - b.name.length,
    },
    {
        title: "Gender",
        dataIndex: "gender",
        key: "gender",
            sorter : (a, b) =>   a.gender.length - b.gender.length,
    },
    {
        title: "Phone Number",
        dataIndex: "phone",
        key: "phone"
    },
    {
        title: "Nationality",
        dataIndex: "nationality",
        key: "nationality"
    }, {
        title: "Action",
        dataIndex: "action",
        key: "action",
        render: (text, record) => ( 
            <> 
            <Button className="me-2" type="primary" onClick={() => console.log(record)}>Edit</Button>
            <Button type="primary" danger onClick={() =>   removeItem(record.key)    }>Delete</Button>
</>
        )
    }
];
    return (
        <div>
            <div>

                <Table
                    columns={columns}
                    dataSource={data}
                />
            </div>
        </div>
    );
}
