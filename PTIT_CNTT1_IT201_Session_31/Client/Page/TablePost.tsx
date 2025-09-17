import {Space, Table, Tag, Button, Image} from 'antd';
import type {TableProps} from 'antd';
import React from "react";
import type {Post} from "./Manager-post"

interface TablePostProps {
    dataPost?: Post[]
}

interface TablePostProps {
    handelDeletePost: (id: (string)) => Promise<void>
}


interface TablePostProps {
    changeStatus: (id: string) => Promise<void>
}


interface TablePostProps {
    setCurrentPost: (value: Post) => void
}


const TablePost: React.FC<TablePostProps> = ({
                                                 dataPost,
                                                 handelDeletePost,
                                                 changeStatus,
                                                 setCurrentPost,

                                             }) => {


    const columns: TableProps<Post>['columns'] = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
            render: (_: any, __: Post, index: number) => index + 1,
        },
        {
            title: 'Tiêu đề',
            dataIndex: 'title',
            key: 'title',
        },

        {
            title: 'Hình ảnh',
            dataIndex: 'image_url',
            key: 'created_at',
            render: (img: string) => <img className={"w-[50px] h-[50px] rounded-full object-cover"} src={img}
                                          alt={"logo"}/>

        },
        {
            title: 'Ngày viết',
            dataIndex: 'created_at',
            key: 'created_at',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',

            render: (status) => (

                <Tag color={status === true ? 'green' : 'red'}>
                    {status ? "Đã Xuất bản" : "Chưa Xuất Bản"}
                </Tag>

            ),
        },
        {
            title: 'Chức năng',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    {record.status ? (
                        <Button onClick={() => changeStatus(record.id)} type="primary" danger>
                            Chặn
                        </Button>
                    ) : (
                        <Button onClick={() => changeStatus(record.id)} color="cyan" variant="solid">
                            Xuất
                        </Button>
                    )

                    }


                    <Button onClick={() => setCurrentPost(record)}>Sửa</Button>
                    <Button onClick={async () => handelDeletePost(record.id)} danger>Xóa</Button>
                </Space>
            ),
        },
    ];


    return (
        <>
            <Table<Post>
                columns={columns}
                dataSource={dataPost ?? []}
                pagination={false}
                rowKey="id"
            />
        </>
    )
}
export default TablePost;