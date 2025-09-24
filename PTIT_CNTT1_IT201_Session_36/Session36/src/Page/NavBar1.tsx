import { Select, Input } from "antd";
import {useAppDispatch} from "../store/hooks.tsx";
import {setCompleted, setPriority, setSearch} from "../store/State/option.tsx"
import  React from "react";
import {useSelector} from "react-redux";
import type {RootState} from "../store";

const { Option } = Select;

export default function TaskFilter() {
    const dispatch = useAppDispatch();
    const option = useSelector((state:RootState) => state.optionSet)

    const setSelect = (value: boolean | null) => {
        dispatch(setCompleted(value))
    }
    const setTask = (value:string) => {
        dispatch(setPriority(value))
    }
    const setInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearch(e.target.value))
    }

    return (
        <div className="flex gap-3 p-5 bg-white rounded-lg shadow-xl mt-4">

            <Select
                onChange={setSelect}
                defaultValue={null} className="w-1/4">
                <Option value={null}>Tất cả</Option>
                <Option value={true}>Hoàn thành</Option>
                <Option value={false}>Chưa xong</Option>
            </Select>


            <Select
                onChange={setTask}
                defaultValue="" className="w-1/4">
                <Option value="">Tất cả</Option>
                <Option value="HIGH">Cao</Option>
                <Option value="MEDIUM">Trung bình</Option>
                <Option value="LOW">Thấp</Option>
            </Select>


            <Input
                onChange={setInput}
                value={option.search}
                placeholder="Tìm kiếm"
                className="w-1/2"
            />
        </div>
    );
}