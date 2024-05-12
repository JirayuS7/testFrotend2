"use client";
import React, { useMemo, useState } from "react";
import { Button, Table, message } from "antd";
import type { TableColumnsType } from "antd";
import { DataType } from "./page";
import { useRouter } from "next/navigation";
import { t } from "i18next";

export default function TableAntD({
    dataLocal,
    removeItem,
    dataTable,
    setDataTable,
    data,
    Edit,
    setEdit,

}: {
    data: DataType[];
    dataLocal: DataType[];
    removeItem: (key: React.Key) => void;
    dataTable: any;
    setDataTable: any;
    Edit: string;
    setEdit: (value: string) => void;
}) {
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: "success",
            content: `  Removed   success fully `,
        });
    };


    const columns: TableColumnsType<DataType> = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            sorter: (a, b) => a.name.length - b.name.length,
            render: (text, record) => <a>{text}</a>,
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
            key: "phone",
        },
        {
            title: "Nationality",
            dataIndex: "nationality",
            key: "nationality",
        },
        {
            title: "Action",
            dataIndex: "action",
            key: "action",
            render: (text, record) => (
                <>
                    <Button
                        className="me-2"
                        type="primary"
                        onClick={() => setEdit(record.key as string)}
                    >
                        Edit
                    </Button>
                    <Button
                        type="primary"
                        danger
                        onClick={() => (
                            removeItem(record.key),
                            alert(`Removed  ID : ${record.key} Successfully`)
                        )}
                    >
                        Delete
                    </Button>
                </>
            ),
        },
    ];







    useMemo(() => {

        setTimeout(() => {
            const dataNew = dataLocal &&
                dataLocal.map((item: any) => {
                    return {
                        key: item.key,
                        name: item.firstName + ` ` + item.lastName,
                        gender: item.gender,
                        phone: item.phone,
                        nationality: item.nationality,
                        action: item.key,
                    };
                });

            setDataTable(dataNew);
        }, 1000);

    }, [data,Edit]);

 

    return (
        <div>
            <div>
                <Table columns={columns} dataSource={dataTable} />
                <div className="text-center">
                    <Button
                        className="me-2"
                        onClick={() => {
                            try {
                                localStorage.removeItem("employee");
                            } catch (error) {
                                console.log(error);
                            }
                            // router.push('/form')
                        }}
                    >
                        Reset Local Storage
                    </Button>
                </div>
            </div>
        </div>
    );
}
