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

  useEffect(() => {
    const dataSample = [];
    for (let i = 0; i < 2; i++) {
      dataSample.push({
        key: i,
        name: `Edward King ${i}`,
        gender: i % 2 === 0 ? `Male` : `Female`,
        phone: `1234567890`,
        nationality: `USA`,
        action: i,
      });
    }
    setData(dataSample.reverse());
  }, []);

  const localeData = () =>  {
    try {
      return localStorage.getItem("employee");
    } catch (error) {
      console.log(error);
      return null;
    }

  }
    
  const localeDataTable = localeData();
  useEffect(() => {
    try {
      if (localeDataTable) {
        setData(JSON.parse(localeDataTable));
      }
    } catch (error) {
      console.log(error);
    }
  }, [localeDataTable]);

 

 

  function removeItem(key: React.Key) {
    const newData = data.filter((item) => item.key !== key) ;

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
          <FormAntd data={data} setData={setData} />
        </div>

        <div className="col-md-6">
          <strong>All Employees ({data.length})</strong>

          <TableAntD data={data} removeItem={removeItem} />
        </div>
      </div>
    </LayoutInner>
  );
}
