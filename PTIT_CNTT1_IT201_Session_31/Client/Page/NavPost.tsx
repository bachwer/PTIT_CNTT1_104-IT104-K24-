import {Button, Input, Select} from "antd";
import React, {useState} from "react";


interface NavPostProps {
    handelModal?: () => void,
    handleSearch: (text: string) => void,
    handelSelect: (code: number) => void
}

export default function NavPost({handelModal, handleSearch, handelSelect}: NavPostProps) {

    const [text, setText] = useState("");

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
        handleSearch(e.target.value)
    }

    const changeSelect = (value: number) => {
        console.log(value);
        handelSelect(value)
    };


    return (
        <div className={"flex justify-between items-center"}>


            <div className={"flex gap-3.5"}>
                <Input
                    onChange={handleInput}
                    value={text}
                    style={{width: "400px"}} size={"large"} placeholder="Nhập từ Khoá tìm kiếm.."/>

                <Select
                    onChange={changeSelect}
                    style={{height: "40px"}}
                    showSearch
                    placeholder="Lọc Bài Viết"
                    filterOption={(input, option) =>
                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    options={[
                        {value: 0, label: '..'},
                        {value: 1, label: 'Đã Xuất Bản'},
                        {value: 2, label: 'Ngừng Xuất Bản'},
                    ]}
                />
            </div>

            <Button
                onClick={() => handelModal ? handelModal() : ""}

                type="primary" size={"large"}>
                Thêm Mới Bài Viết
            </Button>
        </div>
    )
}