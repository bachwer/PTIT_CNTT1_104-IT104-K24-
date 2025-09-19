import {Button, Popconfirm} from "antd";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../store";
import {deleteAll, toggleAll} from "../../store/Ex910/AllTodo.tsx";


export default function(){
    const dispatch = useDispatch<AppDispatch>();
    const {data} = useSelector((state:RootState) => state.tasks)

    const count = () => {
        return  data.reduce((a,b) => b.status ? a + 1 : a + 0,0)
    }

    return(
        <div className={"flex justify-between mt-5"}>

            <span>Số công việc hoàn thành: <strong>{ }</strong>{count()}</span>

            <div className={"flex gap-2.5"}>
                <Popconfirm
                    title="Delete the task"
                    description="Are you sure to delete this task?"
                    okText="Yes"
                    cancelText="No"
                    onConfirm={()  => dispatch(toggleAll())}
                >
                <Button

                    type="primary" size={"large"}>
                    Hoàn thành Tất Cả
                </Button>

                </Popconfirm>

                <Popconfirm
                    title="Delete the task"
                    description="Are you sure to delete this task?"
                    okText="Yes"
                    cancelText="No"
                    onConfirm={() => dispatch(deleteAll())}
                >

                <Button

                    color="danger" variant="outlined" size={"large"}>
                    Xoá Tất Cả
                </Button>
                </Popconfirm>



            </div>
        </div>



    )
}