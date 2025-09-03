import React from 'react';
import { Divider, Table, Button } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import Search from "antd/es/input/Search";

interface DataType {
    key: React.Key;
    fullName: string;
    birthDate: string;
    gender: string;
    email: string;
    address: string;
    phone: string;
}

const columns: TableColumnsType<DataType> = [
    {
        title: 'Họ và tên',
        dataIndex: 'fullName',
    },
    {
        title: 'Ngày sinh',
        dataIndex: 'birthDate',
    },
    {
        title: 'Giới tính',
        dataIndex: 'gender',
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
    {
        title: 'Địa chỉ',
        dataIndex: 'address',
    },
    {
        title: 'Số điện thoại',
        dataIndex: 'phone',
    },
    {
        title: 'Hành động',
        render: (_, ) => (
            <>
                <Button type="default" style={{ marginRight: 8 }}>
                    Sửa
                </Button>
                <Button danger>Xóa</Button>
            </>
        ),
    },
];

const data: DataType[] = [
    {
        key: '1',
        fullName: 'Nguyễn Văn A',
        birthDate: '01/01/1990',
        gender: 'Nam',
        email: 'a.nguyen@example.com',
        address: '123 Đường ABC, Quận 1, TP.HCM',
        phone: '0909123456',
    },
    {
        key: '2',
        fullName: 'Trần Thị B',
        birthDate: '12/12/1995',
        gender: 'Nữ',
        email: 'b.tran@example.com',
        address: '456 Đường XYZ, Quận 3, TP.HCM',
        phone: '0987654321',
    },
    {
        key: '3',
        fullName: 'Lê Minh C',
        birthDate: '05/06/1988',
        gender: 'Nam',
        email: 'c.le@example.com',
        address: '789 Đường DEF, Quận 10, TP.HCM',
        phone: '0912345678',
    },
];

// rowSelection để chọn dòng
const rowSelection: TableProps<DataType>['rowSelection'] = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
};

const App: React.FC = () => {


    return (
        <div>
            <div className={"flex justify-between"}>
                <h1>Nhan Vien </h1>


                <div className="flex flex-col justify-end items-center gap-2">
                    <Button type="primary" className="w-[180px]">
                        Thêm mới nhân viên
                    </Button>
                    <Search
                        placeholder="Tìm kiếm nhân viên theo tên"
                        allowClear
                        style={{ width: 250 }}
                    />
                </div>
            </div>
            <Divider />



            <Table<DataType>
                rowSelection={{ type: 'checkbox', ...rowSelection }}
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 10 }}
            />
        </div>
    );
};

export default App;