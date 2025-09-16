import React, { useEffect, useState} from "react";
import {Modal} from "antd";

interface ModalEditProps {
    open: boolean,
    onSubmit: (value: string) => void,
    handleModel?: () => void,
    valueTarget?: string
}

export default function ModalEdit({open, onSubmit, handleModel, valueTarget}: ModalEditProps) {
    const [value, setValue] = useState(valueTarget);

  useEffect(() => {
    setValue(valueTarget ?? "");
  }, [valueTarget]);



  const handelInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }





    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if(!value) return

      onSubmit(value);

      if (handleModel) {
        handleModel();
      }


    };



    return (
        <Modal onOk={handleSubmit} title={"Edit Task"} open={open} onCancel={() => handleModel ? handleModel() : ""}>

            <input onChange={handelInput} className={"w-full h-[30px] p-5 border rounded border-gray-300"} value={value}/>

        </Modal>
    );
}