import {type ChangeEvent, Component} from 'react'


interface Props {
    todo: string,
    isOpen: boolean,
    onClose: () => void,
    id:number,
    edit: (todo: string, id: number) => void;
}

interface State {
    value: string;
}

export default class Modal extends Component <Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { value: props.todo };
    }

    handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            value: e.target.value,
        })
    }


    render() {
        const {isOpen, onClose, id, edit} = this.props;

        if (!isOpen) return null;

        return (
             <dialog id="my_modal_1" className="modal" open>
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Edit!</h3>
                    <input value={this.state.value} onChange={this.handleInput}/>

                    <div className="modal-action">

                            {/* if there is a button in form, it will close the modal */}
                            <button onClick={onClose} className="btn">Close</button>
                        <button
                            onClick={() => {
                                edit(this.state.value, id);
                                onClose();
                            }}
                            className="btn"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </dialog>
        )
    }
}