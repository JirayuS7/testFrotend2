"use client";
import FormAntd from "@/app/components/form";
import LayoutInner from "../layoutInner";
import TableAntD from "./table";
export interface DataType {
    key: React.Key;
    name: string;
    gender: string;
    phone: string
    nationality: string
    action: any

}
export default function FormPage() {

    const data: DataType[] = [];

    for (let i = 0; i < 46; i++) {
        data.push({
            key: i,
            name: `Edward King ${i}`,
            gender: `men`,
            phone: `1234567890`,
            nationality: `USA`,
            action: i,

        });
    }

    //  remove item from table
    function removeItem(key: React.Key) {
        console.log("🚀 ~ removeItem ~ key:", key)
        
        const newData = data.filter((item) => item.key !== key);
        console.log("🚀 ~ removeItem ~ newData:", newData)
        console.log(newData)


    }


    return (
        <LayoutInner>
            <div className="row">
                <div className="col-md-6" > <FormAntd /></div>

                <div className="col-md-6" >
                    
                    <strong>All Employees ({data.length})</strong>  
                    
                     <TableAntD data={data}  removeItem={removeItem}/></div>
            </div>
        </LayoutInner>
    );
}
