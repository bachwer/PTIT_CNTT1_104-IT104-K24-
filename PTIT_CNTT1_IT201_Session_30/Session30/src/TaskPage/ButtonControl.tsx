import {Button} from "antd";
import {useState} from "react";


interface ButtonControlProps {
    handleBtn?: (code: number) => void,

}

export default function ({handleBtn}: ButtonControlProps) {
    const [numBtn, setNum] = useState(1)


    return (
        <div className={"w-full flex justify-center gap-5 p-5 border border-gray-200 mt-5  rounded-md shadow-lg"}>

            <Button
                onClick={() => {
                    setNum(1);
                    handleBtn?.(1)
                }}
                type={numBtn === 1 ? "primary" : "default"}
                size={"large"}>
                Tất cả
            </Button>
            <Button
                onClick={() => {
                    setNum(2);
                    handleBtn?.(2)
                }}
                type={numBtn === 2 ? "primary" : "default"}
                size={"large"}>
                Hoàn Thành
            </Button>
            <Button
                onClick={() => {
                    setNum(3);
                    handleBtn?.(3)
                }}
                type={numBtn === 3 ? "primary" : "default"}
                size={"large"}>
                Đang Thực Hiện
            </Button>
        </div>
    )
}