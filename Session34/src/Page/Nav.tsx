import {Button, Input} from "antd";

import {useAppDispatch} from "../store/hooks.tsx";
import {handleMode} from "../store/state/Modal.tsx";
import {useSelector} from "react-redux";
import type {RootState} from "../store";
import React, {useState} from "react";
import {handleModeSearch} from "../store/state/valueSreach.tsx";
import {changeValue} from "../store/state/ValueBtn.tsx";


export default function(){
    const dispatch = useAppDispatch();
    const Modal = useSelector((state: RootState) => state.Modal)

    const [value, setValue] = useState("");


    const handelInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)

        dispatch(handleModeSearch(e.target.value))
    }



    return(
        <div className={"flex p-20 justify-between"}>
            <Button

                onClick={() => {dispatch(handleMode()) ; console.log(Modal); dispatch(changeValue("Add"))}}
                type="primary" size={"large"}>
                Thêm mới sinh viên
            </Button>

            <div className={"flex gap-4"}>
                <Input
                    value = {value}
                    onChange={handelInput}
                    size="large" placeholder="Tìm Kiếm SV.."/>
                <Button type="primary" size={"large"}>
                    Tìm Kiếm
                </Button>


                <Button

                    color="default" variant="outlined" size={"large"}>
                    Sắp Xếp
                </Button>
            </div>
        </div>
    )
}