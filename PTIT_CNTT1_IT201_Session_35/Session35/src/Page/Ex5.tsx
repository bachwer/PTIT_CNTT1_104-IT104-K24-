import {
    ArrowLeftOutlined,
    ArrowRightOutlined,
    DashboardOutlined,
    DollarOutlined,
    FileTextOutlined,
    LineChartOutlined,
    UserOutlined
} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../store";
import {change} from "../store/State/Ex3Dark.tsx";


export default function(){
    const modal = useSelector((state:RootState) => state.ChangeMode);
    const dispatch = useDispatch();



    return(
        <div
            className={`h-[100%] p-5 flex flex-col justify-between absolute top-0 left-0 bg-[#041433] text-white
              transition-all duration-300 ease-in-out
              ${modal ? "w-[250px]" : "w-[80px]"}`}
        >
            <div className="flex flex-col gap-3.5">
                <div className="flex gap-3 items-center">
                    <DashboardOutlined className="text-[24px]" />
                    {modal && <span>Bảng điều Kiển</span>}
                </div>
                <div className="flex gap-3 items-center">
                    <UserOutlined className="text-[24px]" />
                    {modal && <span>Tài Khoản</span>}
                </div>
                <div className="flex gap-3 items-center">
                    <DollarOutlined className="text-[24px]" />
                    {modal && <span>Tài Sản</span>}
                </div>
                <div className="flex gap-3 items-center">
                    <LineChartOutlined className="text-[24px]" />
                    {modal && <span>Thông Kê</span>}
                </div>
                <div className="flex gap-3 items-center">
                    <FileTextOutlined className="text-[24px]" />
                    {modal && <span>Tài liệu</span>}
                </div>
            </div>

            <div
                onClick={() => dispatch(change())}
                className="cursor-pointer flex items-center gap-2"
            >
                {modal ? <ArrowLeftOutlined /> : <ArrowRightOutlined />}
                {modal && "Thu gọn"}
            </div>
        </div>
    )
}
