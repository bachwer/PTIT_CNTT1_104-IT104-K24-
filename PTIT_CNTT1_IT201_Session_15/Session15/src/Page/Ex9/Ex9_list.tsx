import {Component} from 'react';
import type {Todolist} from './Ex9_Parent';
import Modal from './ModalPopup'

interface Props {
    data: Todolist[];
    checked: (id: number) => void;
    Delete: (id: number) => void;
    edit: (todo: string, id: number) => void;
}

interface State {
    isOpen: boolean;
    currentTodo: string;
    currentId: number;

}

export default class Ex9_List extends Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            isOpen: false,
            currentTodo: '',
            currentId: 0,
        };
    }

    closeModal = () => {
        this.setState({isOpen: false, currentTodo: ''});
    };

    openModal = (todo: string, id: number) => {
        this.setState({isOpen: true, currentTodo: todo, currentId: id});
    };




    render() {
        const {data, checked, Delete, edit} = this.props;
        const {isOpen, currentTodo, currentId} = this.state;
        return (
            <div>
                {
                    data.map((a) => (
                        <div key={a.id} className={"Ex9Container"}>
                            <div style={{display: "flex", gap: "10px"}}>
                                {a.status ?
                                    <input type={"checkbox"} onChange={() => checked ? checked(a.id) : null} checked/> :
                                    <input type={"checkbox"} onChange={() => checked ? checked(a.id) : null}/>}
                                {a.status ? <s>{a.todo}</s> : <p>{a.todo}</p>}
                            </div>


                            <div className={"Ex9Container1"}>
                                <div className={"Ex9Container1"}>
                                    <button onClick={() => this.openModal(a.todo, a.id)} className={"BtnEdit"}>Sửa</button>
                                    <button onClick={() => (Delete ? Delete(a.id) : undefined)}
                                            className={"BtnDelete"}>Xoá
                                    </button>
                                </div>
                            </div>

                        </div>

                            ))}





                    <Modal isOpen={isOpen} todo={currentTodo} onClose={this.closeModal} id={currentId} edit={edit}/>
            </div>
                    )
            }
}
