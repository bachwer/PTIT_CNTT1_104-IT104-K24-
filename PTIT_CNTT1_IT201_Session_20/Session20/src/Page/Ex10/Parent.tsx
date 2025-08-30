import "./ex10.css"
import { supabase } from "./getDataWrapper";



async function fetchData() {
    const { data, error } = await supabase.from("data1").select("*");
    if (error) console.error(error);
    else console.log("✅ Dữ liệu:", data);
}
import {useEffect, useMemo, useState} from "react";



interface dataTable{
    id: number,
    column_title: string,
    column_type: string,
    column_statusRead: boolean
}



export default function Ex10(){
    const [dataTable, setTable] = useState<dataTable[]>([])




    useEffect(() => {
        const fetchData = async () => {
            const {data, error} = await supabase.from("data1").select("*");
            if(error) console.error(error)
            else{
                setTable(data);
                console.log(dataTable);
            }
        };
        fetchData().then(r => console.log("then" + r));
    }, []);



    const dataUnread = useMemo(() => {
        return dataTable.filter((status) => !status.column_statusRead);
    },[dataTable])

    const dataRead = useMemo(() => {
        return dataTable.filter((status) => status.column_statusRead);
    },[dataTable])


    const handleBtn = async (id:number, status: boolean) => {

        console.log("click")
        try {
            const { error } =  await supabase
                .from("data1")
                .update({column_statusRead: status})
                .eq("id", id)


            if(error) console.log("failed U" + error)
            else{
                setTable((prev) => prev.map((item) =>
                    item.id === id? {...item, column_statusRead: status} :item,
                ))

            }
        }catch(err){
            console.log("failed U" + err)
        }
    }


    return(
        <div className={"container"}>
            <h1>Quản Lý Bài Viết</h1>

            <div className={"ProcessBox"}>
                <div className={"Process"} style={{width: (Math.round(((dataRead.length / dataTable.length) * 100))) + "%" }}>

                </div>
            </div>

            <p>Đã đọc: {dataRead.length} / {dataTable.length}  bài viết ( {Math.round(((dataRead.length / dataTable.length) * 100) ) }% )</p>

            <div className={"boxContainer"}>
                <h4>Bài viết chưa Đọc:  <div className={"circle blue"}>{dataUnread.length}</div> </h4>

               <div className={"roll"}>
                   {dataUnread.map((con) => (


                       <div className={"childrenBox"}>
                           <div>
                               <h5>{con.column_title}</h5>
                               <p><span className={"typeBox"}>{con.column_type}</span></p>
                           </div>
                           <div>
                               <button onClick={() => handleBtn(con.id, true)} className={"Btn-Unread"}>Đánh Dấu Đã Đọc</button>
                           </div>
                       </div>

                   ))
                   }
               </div>
            </div>

            <div className={"boxContainer"} >
                <h4>Bài viết đã Đọc:  <div className={"circle green"}>{dataRead.length}</div></h4>

                <div className={"roll"}>
                    {dataRead.map((con) => (
                        <div className={"childrenBox"}>
                            <div>
                                <h5>{con.column_title}</h5>
                                <p><span className={"typeBox"}>{con.column_type}</span></p>
                            </div>
                            <div>
                                <button onClick={() => handleBtn(con.id, false)}  className={"Btn-read"}>Đánh Dấu Đã Đọc</button>
                            </div>
                        </div>
                    ))
                    }
                </div>


            </div>



        </div>
    )

}


