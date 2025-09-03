import {Button} from "antd";


export default function Ex8(){

    return(
        <div className={"flex flex-col gap-3.5"}>
            <div className={"flex flex-row gap-3 border-2 border-gray-200 p-2 w-[97%] rounded-2xl m-auto"}>
                <Button type="primary">01</Button>
                <Button type="primary">02</Button>
                <Button type="primary">03</Button>
            </div>

            <div className={"flex flex-row gap-3 justify-end border-2 border-gray-200 p-2 w-[97%] rounded-2xl m-auto"}>
                <Button type="primary">01</Button>
                <Button type="primary">02</Button>
                <Button type="primary">03</Button>
            </div>

            <div className={"flex flex-row gap-3 justify-center border-2 border-gray-200 p-2 w-[97%] rounded-2xl m-auto"}>
                <Button type="primary">01</Button>
                <Button type="primary">02</Button>
                <Button type="primary">03</Button>
            </div>

            <div className={"flex flex-row gap-3 justify-around border-2 border-gray-200 p-2 w-[97%] rounded-2xl m-auto"}>
                <Button type="primary">01</Button>
                <Button type="primary">02</Button>
                <Button type="primary">03</Button>
            </div>

            <div className={"flex flex-row gap-3 justify-between border-2 border-gray-200 p-2 w-[97%] rounded-2xl m-auto"}>
                <Button type="primary">01</Button>
                <Button type="primary">02</Button>
                <Button type="primary">03</Button>
            </div>

            <div className={"flex flex-row gap-3 justify-evenly border-2 border-gray-200 p-2 w-[97%] rounded-2xl m-auto"}>
                <Button type="primary">01</Button>
                <Button type="primary">02</Button>
                <Button type="primary">03</Button>
            </div>



        </div>
    )
}