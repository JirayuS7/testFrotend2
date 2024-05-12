"use client";
import React, { useMemo, useState } from "react";
import { Button, Table, message } from "antd";
import type { TableColumnsType } from "antd";
import { DataType } from "./page";
import { useRouter } from 'next/navigation'
import { t } from "i18next";


export default function TableAntD({ data, removeItem }: {
    data: DataType[],
    removeItem: (key: React.Key) => void

}) {
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: 'success',
            content: `  Removed   success fully `,
        });
    };



    const router = useRouter()

    const columns: TableColumnsType<DataType> = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            sorter: (a, b) => a.name.length - b.name.length,
            render: (text, record) => <a>{text}</a>
        },
        {
            title: "Gender",
            dataIndex: "gender",
            key: "gender",
            sorter: (a, b) => a.gender.length - b.gender.length,
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
                    <Button type="primary" danger onClick={() => (removeItem(record.key)
                        , alert(`Removed  ID : ${record.key} Successfully`)
                    )}>Delete</Button>
                </>
            )
        }
    ];


    const [dataTable, setDataTable] = useState(data)

    useMemo(() => {
        setDataTable(data)
    }, [data])


    return (
        <div>
            <div>

                <Table
                    columns={columns}
                    dataSource={dataTable}
                />
                <div className="text-center">
                    <Button className="me-2"
                        onClick={() => {
                            try { localStorage.removeItem("employee") } catch (error) { console.log(error) }
                            // router.push('/form') 
                            
                        }}
                    >Reset Local Storage</Button></div>
            </div>
        </div>
    );
}
