import {Button, Select, Tag} from "antd";
import {useAppDispatch} from "../../hooks.tsx";

import {handelMode} from "../../store/Ex910/Model.tsx";
import {DelAll, Push} from "../../store/Ex910/filterLevr.tsx";


export default function(){

    const dispatch = useAppDispatch();

    const options = [
        {
            label: 'Khẩn Cấp',
            value: 'Urgent',
            color: 'red',
        },
        {
            label: 'Quan Trọng',
            value: 'Important',
            color: 'orange',
        },
        {
            label: 'Bình Thường',
            value: 'Moderate',
            color: 'blue',
        },
        {
            label: 'Không Quan Trọng',
            value: 'Unimportant',
            color: 'gray',
        },
    ];


    return(
        <div className={"w-[300px] flex gap-2.5 ml-auto mt-5"}>
            <Select
                mode="multiple"
                style={{ width: "100%" }}
                placeholder="Lọc theo cấp độ."
                options={options}
                onChange={(values) => {
                    console.log("Selected values:", values);

                    dispatch(DelAll());
                    values.forEach((val: string) => dispatch(Push(val)));
                }}
                tagRender={(props) => {
                    const { label, value, closable, onClose } = props;
                    const opt = options.find((o) => o.value === value);

                    return (
                        <Tag
                            color={opt?.color}
                            closable={closable}
                            onClose={onClose}
                            style={{ marginRight: 3, borderRadius: 20, padding: "2px 12px" }}
                        >
                            {label}
                        </Tag>
                    );
                }}
            />
            <Button
                onClick={() => dispatch(handelMode())}
                type="primary" size={"large"}>
                Thêm
            </Button>
        </div>
    )
}