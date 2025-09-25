import {Button, Select} from "antd";
import {useAppDispatch} from "../store/hooks.tsx";
import {setGrade, setSearch, setSort} from "../store/state/ControlFilter.tsx";
import React, {useState} from "react";


export default function (){

    const dispatch = useAppDispatch()
    const [input, setInput] = useState("");
    const setValueSelect = (type:string, value: string) => {

        if(type === "grade"){
            dispatch(setGrade(value))
            console.log(value)
        }else{
            dispatch(setSort(value))
            console.log(value)
        }
    }

    const handelInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
        dispatch(setSearch(e.target.value))
    }

    return(
        <div className={"p-4 justify-between shadow-xl bg-white flex border-2 border-gray-200 rounded"}>
            <input
                value={input}
                onChange={handelInput}
                className={"border p-1 pl-3 w-[40%] border-gray-300 rounded "} placeholder={"Tìm kiếm theo tên"}/>
            <Select
                className={"w-[200px]"}
                showSearch
                onChange={(value) => setValueSelect("grade", value)}
                size={"large"}
                placeholder="Grade"
                filterOption={(input, option) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={[
                    { value: "", label: 'Tất cả' },
                    { value: 'A', label: 'Grade: A' },
                    { value: 'B', label: 'Grade: B' },
                    { value: 'C', label: 'Grade: C' },
                ]}
            />
            <Select
                onChange={(value) => setValueSelect("sort", value)}
                showSearch
                size={"large"}
                placeholder="Name   A -> Z"
                filterOption={(input, option) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={[
                    { value: 'AtoZ', label: 'A -> Z' },
                    { value: 'ZtoA', label: 'z -> A' },
                    { value: 'increaseAge', label: 'Age ↑' },
                    { value: 'decreaseAge', label: 'Age ↓' },
                ]}
            />
            <Button
                onClick={() => {
                    dispatch(setGrade(""));
                    dispatch(setSort(""));
                    dispatch(setSearch(""));
                    setInput("");
                }}
                color="primary" size={"large"} variant="outlined">
                Clear
            </Button>
        </div>
    )
}
