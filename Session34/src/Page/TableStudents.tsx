import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import {useAppDispatch, useAppSelector} from "../store/hooks.tsx";
import {type RootState, store} from "../store";
import { useEffect} from "react";
import {deleteStudent, fetchStudent, selectedStudent} from "../store/state/students.tsx";
import {handleMode} from "../store/state/Modal.tsx";
import {useSelector} from "react-redux";
import {changeValue} from "../store/state/ValueBtn.tsx";
export type AppDispatch = typeof store.dispatch;

interface student {
    id: string,
    codeSV: string,
    fullName: string,
    age: number,
    gender: boolean,
    dateOfBirth: string,
    placeOfBirth: string,
    address: string,
}



export default function StudentLis()  {
    const students = useAppSelector((state: RootState) => state.students)
    const valueSearch = useSelector((state: RootState) => state.Search)
    // const valueBtn = useSelector((state: RootState) => state.ValueBtn);

    const dispatch = useAppDispatch();

    if(valueSearch !== ""){
        console.log(valueSearch);
    }


    useEffect(() => {
        dispatch(fetchStudent())
    }, []);


    return (
        <div className="flex justify-center items-center">
            <TableContainer>
                <Table className={"pl-20"}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">#</TableCell>
                            <TableCell align="center">Mã sinh viên</TableCell>
                            <TableCell align="center">Tên sinh viên</TableCell>
                            <TableCell align="center">Tuổi</TableCell>
                            <TableCell align="center">Giới tính</TableCell>
                            <TableCell align="center">Hành động</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { valueSearch === "" ? (<>
                            {students.data.map((s, i) => (
                                <>

                                    {dataRender(s,i,dispatch)}

                                </>
                            ))}
                        </>):(<>
                            {students.data.map((s, i) => (
                                <>

                                    {s.fullName.toLowerCase().includes(valueSearch.toLowerCase()) && (
                                        dataRender(s,i,dispatch)
                                    )}

                                </>
                            ))}
                        </>)

                        }


                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};



function dataRender (s:student,i: number, dispatch: AppDispatch){
    return(
        <TableRow key={s.id}>
            <TableCell align="center">{i + 1}</TableCell>
            <TableCell align="center">{s.codeSV}</TableCell>
            <TableCell align="center">{s.fullName}</TableCell>
            <TableCell align="center">{s.age}</TableCell>
            <TableCell align="center">{s.gender ? "Nam": "Nữ"}</TableCell>
            <TableCell align="center">
                <div className="flex justify-center gap-2">
                    <Button
                        onClick={() => {dispatch(selectedStudent(s.id)); dispatch(handleMode()); dispatch(changeValue("View"))}}
                        variant="contained" color="error">
                        Xem
                    </Button>
                    <Button variant="contained" color="warning"
                            onClick={() => {dispatch(selectedStudent(s.id));dispatch(changeValue("Edit")); dispatch(handleMode())}}
                    >

                        Sửa
                    </Button>
                    <Button
                        onClick={() => {dispatch(deleteStudent(s.id))}}
                        variant="contained" color="success">
                        Xóa
                    </Button>
                </div>
            </TableCell>
        </TableRow>
    )
}