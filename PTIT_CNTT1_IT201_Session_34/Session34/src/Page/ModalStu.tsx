import {
    Button,
    MenuItem,
    Select,
    TextField,
    type SelectChangeEvent,
} from '@mui/material';

import React, {useEffect} from 'react';
// import {useAppDispatch} from "../store/hooks.tsx";
import {useSelector} from "react-redux";
import type {RootState} from "../store";
import {Modal} from "antd";
import {handleMode} from "../store/state/Modal.tsx";
import {useAppDispatch, useAppSelector} from "../store/hooks.tsx";
import {addStudent, clearSelectedStudent, updateStudent} from "../store/state/students.tsx";
interface Student {
    id:string;
    codeSV: string;
    fullName: string,
    age: number,
    gender: boolean,
    dateOfBirth: string,
    placeOfBirth: string,
    address: string,
}




type InputChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
type FormChangeEvent = InputChangeEvent | SelectChangeEvent;

const StudentForm = () => {

    const dispatch = useAppDispatch();
    const ModalValue = useSelector((state: RootState) => state.Modal)

    const [form, setForm] = React.useState<Student>({
        id: "",
        codeSV: '',
        fullName: '',
        age: 0,
        gender: false,
        dateOfBirth: '',
        placeOfBirth: '',
        address: '',
    });
    const selectedId = useAppSelector((state: RootState) => state.students.selected);
    const selectedStudent = useAppSelector((state: RootState) =>
        state.students.data.find(s => s.id === selectedId)
    );


    useEffect(() => {
        console.log(selectedStudent);
        if (selectedStudent) {
            setForm(selectedStudent);
        }
    }, [selectedStudent]);

    const handleChange = (e: FormChangeEvent) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const ValueBtn = useSelector((state:RootState) => state.ValueBtn);
    const handleSubmit = () => {
        if (!form.codeSV || !form.fullName || form.gender === null) return;
        console.log(form);

        if(ValueBtn === "Add"){
            dispatch( addStudent(form))
        }else{
            dispatch( updateStudent(form))
        }





        setForm({
            id: "",
            codeSV: '',
            fullName: '',
            age: 0,
            gender: false,
            dateOfBirth: '',
            placeOfBirth: '',
            address: '',
        });
        dispatch(handleMode())
        dispatch(clearSelectedStudent())
    };

    console.log(ValueBtn);

    return (
        <Modal
            onCancel={() => {dispatch(handleMode()); dispatch(clearSelectedStudent())}}
            footer={null}


            open={ModalValue}>


            <h2 className="font-semibold mb-4">Thông Tin Sinh Viên</h2>
                <div className="flex flex-col gap-4">
                    <TextField
                        label="Mã sinh viên"
                        name="codeSV"
                        value={form.codeSV}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        label="Tên sinh viên"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        label="Tuổi"
                        name="age"
                        type="number"
                        value={form.age}
                        onChange={handleChange}
                        fullWidth
                    />
                    <Select name="gender" value={form.gender ? "Nam" : "Nữ"} onChange={handleChange} fullWidth>
                        <MenuItem value="Nam">Nam</MenuItem>
                        <MenuItem value="Nữ">Nữ</MenuItem>
                    </Select>
                    <TextField
                        type="date"
                        label="Ngày sinh"
                        name="dateOfBirth"
                        value={form.dateOfBirth}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        label="Nơi sinh"
                        name="placeOfBirth"
                        value={form.placeOfBirth}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        label="Địa chỉ"
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        fullWidth
                    />
                    {ValueBtn !== "View" &&
                        (
                            <Button variant="contained" color="primary" onClick={handleSubmit}>
                                Submit
                            </Button>
                        )
                    }
                </div>




        </Modal>
    );
};

export default StudentForm;