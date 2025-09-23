import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../store";
import {HeartOutlined} from "@ant-design/icons";
import {Favorite} from "../store/State/ListStudents.tsx";


export default function(){
    const StuList = useSelector((state: RootState) => state.ChangeFavorite)
    const dispatch = useDispatch()
    return(
        <div className={"w-[250px] p-2 border  flex flex-col gap-3.5 m-auto mt-[5%]"}>
            <h1 className={"font-bold "}>List Favorites Use</h1>

            {StuList.map((a) => (
                <div className={"border-b-1 border-gray-200"}>
                    <p>UserName: {a.name}</p>
                    <p
                        onClick={() => dispatch(Favorite(a.id))}
                        className={"hover:scale-110 transition-transform duration-300"}>Favorites: {a.favorite ? <HeartOutlined  className={"bg-red-500 border-2 cursor-pointer"} /> : <HeartOutlined  className={" cursor-pointer"} />}</p>
                </div>
            ))

            }

        </div>
    )
}