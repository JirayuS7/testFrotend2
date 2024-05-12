"use client";
import FormAntd from "@/app/[locale]/components/form";
import LayoutInner from "../layoutInner";
import TableAntD from "./table";
import { useEffect, useState } from "react";
import { message } from "antd";
export interface DataType {
  key: string | number;
  name: string;
  gender: string;
  phone: string;
  nationality: string;
  action: any;
}
export default function FormPage() {
  const [data, setData] = useState<DataType[]>([]);
  const [dataTable, setDataTable] = useState([]);

  const localeData = () => {
    const datas = localStorage.getItem("employee");

    if (datas) {
      try {
        return JSON.parse(datas);
      } catch (error) {
        console.log(error);
        return null;
      }
    }
  };

  const localeDataTable = localeData();
 

  useEffect(() => {
    try {
      if (localeDataTable) {
        setData(localeDataTable);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  function removeItem(key: React.Key) {
    const newData = data.filter((item) => item.key !== key);

    try {
      localStorage.setItem("employee", JSON.stringify(newData));
      setData(newData);
    } catch (error) {
      alert("Error Removing Employee");
    }
  }

  return (
    <LayoutInner>
      <div className="row">
        <div className="col-md-6">
          {" "}
          <FormAntd
            localData={localeDataTable}
            dataTable={dataTable}
            setDataTable={setDataTable}
            data={data}
            setData={setData}
          />
        </div>

        <div className="col-md-6">
          <strong>All Employees ({dataTable.length})</strong>

          <TableAntD
            dataLocal={localeDataTable}
            removeItem={removeItem}
            dataTable={dataTable}
            setDataTable={setDataTable}
            data={data}
           
          />
        </div>
      </div>
    </LayoutInner>
  );
}
