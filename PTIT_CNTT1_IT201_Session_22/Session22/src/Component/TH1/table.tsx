import {Input, Modal, type TableProps} from 'antd';
import {Button, Space, Table} from 'antd';
import Search from "antd/es/input/Search";
import {type ChangeEvent, useState} from "react";

interface DataType {
    key: string;
    name: string;
    birth: string;
    sex: string;
    address: string;
    email:string;
    phoneNumber:string;
}

const columns: TableProps<DataType>['columns'] = [
    {
        title: 'Họ & Tên',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Ngày Sinh',
        dataIndex: 'birth',
        key: 'date',
    },
    {
        title: 'Giớ Tính',
        dataIndex: 'sex',
        key: 'sex',
    },
    {
        title: 'Email',
        key: 'email',
        dataIndex: 'email',
    },
    {
        title: 'Address',
        key: 'address',
        dataIndex: 'address',
    },
    {
        title: 'Số điện thoại',
        key: 'phoneNumber',
        dataIndex: 'phoneNumber',
    },




    {
        title: 'Action',
        key: 'action',
        render: (_) => (
            <Space size="middle">
                <Button color="default" variant="dashed">
                    Sửa
                </Button>
                <Button color="danger" variant="solid">
                    Xoá
                </Button>

            </Space>
        ),
    },
];

//
//
// const data: DataType[] = [
//     {
//         key: '1',
//         name: 'John Brown',
//         birth: '1992-05-14',
//         sex: 'Nam',
//         email: 'john.brown@example.com',
//         address: 'New York No. 1 Lake Park',
//         phoneNumber: '0123456789',
//     },
//     {
//         key: '2',
//         name: 'Jim Green',
//         birth: '1982-11-22',
//         sex: 'Nam',
//         email: 'jim.green@example.com',
//         address: 'London No. 1 Lake Park',
//         phoneNumber: '0987654321',
//     },
//     {
//         key: '3',
//         name: 'Joe Black',
//         birth: '1990-03-01',
//         sex: 'Nam',
//         email: 'joe.black@example.com',
//         address: 'Sydney No. 1 Lake Park',
//         phoneNumber: '0911223344',
//     },
// ];


function getData():DataType[]{
    const data = localStorage.getItem("dataStudents");

    return data ? JSON.parse(data) as DataType[] : [];

}



function table(){


    const [dataTable, setData] = useState<DataType[]>(getData());
    const [dataToAdd, setDataAdd] = useState<DataType>({
        key: '',
        name: '',
        birth: '',
        sex: '',
        email: '',
        address: '',
        phoneNumber: '',

    })
    const [isOpen, setOpen] = useState(false);
    const [valid, setValid] = useState(false);



    const handleModal = () => {
        setOpen(!isOpen)
    }



    const addStudents = () => {
        const isValid = Object.values(dataToAdd).every(value => value !== "");
        if(isValid){
            setData((prev) =>({
                ...prev,
                dataToAdd,
            }))
            handleModal();
        }



    }

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        const isValid = Object.values(dataToAdd).every(value => value !== "");

        if(!isValid){
            setValid(true);
        }else{
            setValid(false);
        }

        setDataAdd((prev) =>({
                ...prev,
                [name]: value
            }));
    }










    return(
        <div>

            <Modal onOk={addStudents}  onCancel={handleModal} open={isOpen}>
                <h3>Điền Thông Tin Sinh Viên</h3>
                <div className={"flex gap-3 flex-col"}>
                    <Input onChange={handleChangeInput} name={"name"} placeholder="Họ & Tên" />

                   <label> Ngày Sinh
                       <Input onChange={handleChangeInput} type={"date"} name={"birth"} placeholder="Ngày Sinh" />
                   </label>

                    <Input onChange={handleChangeInput} name={"sex"} placeholder="Giới Tính" />
                    <Input onChange={handleChangeInput} name={"email"} placeholder="Email" />
                    <Input onChange={handleChangeInput} name={"address"} placeholder="Địa Chỉ" />
                    <Input onChange={handleChangeInput} name={"phoneNumber"} placeholder="Số Điện Thoại" />
                </div>

                {/*valid*/}
                {valid && <p className="!text-red-600 !font-medium">Invalid</p>}


            </Modal>



          <div className={"flex justify-content-sm-between mb-4"}>
              <h3>Danh Sách SV</h3>
             <div className={"flex flex-column w-25 gap-3"}>
                 <Button onClick={handleModal}  type="primary" className={"w-[200px] ml-[100px]"} size={"middle"}>
                     Thêm Sinh Viên
                 </Button>
                 <Search placeholder="input search text"  style={{ width: 300 }} />
             </div>
          </div>


            <Table<DataType> columns={columns} dataSource={dataTable} />
        </div>
    )
}

export default table;