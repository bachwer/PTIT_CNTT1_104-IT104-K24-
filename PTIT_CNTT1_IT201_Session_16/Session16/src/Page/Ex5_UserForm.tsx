import  {Component, type ChangeEvent} from 'react'



interface User{
    fullName: string,
    email: string,
    age: number,
}

interface UserForm {
    user: User;
    isOpen: boolean,
    text: string | null;
}


class Ex5 extends Component<{}, UserForm>{
    constructor(props: {}){
        super(props)
        this.state = ({
           user: {
               fullName: "",
               email: "",
               age: 0,
           },
            isOpen: false,
            text: null,
        })

    }

    handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        this.setState((prev) => ({
            user: {
                ...prev.user,
                [name]: name === "age" ? Number(value) : value,
            },
        }));
    };

    handleSubmit = () => {
        console.log(this.state.user)
        if(this.state.user.fullName === ""){
            this.setState({
                text: "!! Ten Không Hợp lệ"
            })
        }else if(this.state.user.email === ""){
            this.setState({
                text: "!! Email Không Hợp lệ"
            })
        }else if(this.state.user.age === 0){
            this.setState({
                text: "!! Tuổi Không Hợp lệ"
            })
        }else{
            this.setState({
                text: "ok"
            })
        }

    }



    render(){
        return(
            <div>
                <h1>Click button !</h1>

                <button type="button" className="btn btn-danger" onClick={() => this.setState({isOpen: true})}>???????</button>



                {this.state.isOpen && (
                    <dialog id="my_modal_1" className="modal" open>
                        <div className="modal-box" style={{textAlign: "center"}}>
                            <h2 style={{fontWeight: "bold"}}>Nhập Thông Tin Người Dùng</h2>

                            <div style ={{display: "flex", gap: "10px", flexDirection: "column", margin: "20px 0 20px 0"}}>
                                <input onChange={this.handleInput} name={"fullName"} placeholder={"Họ Tên"} style ={{paddingLeft: "10px",backgroundColor: "#D5E3E8" ,width: "100%", borderRadius: "5px", height: "40px"}}/>
                                <input onChange={this.handleInput} name={"email"} placeholder={"Email"} style ={{paddingLeft: "10px",backgroundColor: "#D5E3E8" ,width: "100%", borderRadius: "5px", height: "40px"}}/>
                                <input onChange={this.handleInput} name={"age"} placeholder={"Tuổi"} type={"number"} style ={{paddingLeft: "10px",backgroundColor: "#D5E3E8" ,width: "100%", borderRadius: "5px", height: "40px"}}/>

                            </div>

                            <div className="modal-action" style={{display: "flex"}}>
                                <button className="btn" onClick={this.handleSubmit}>Submit</button>
                                <button className="btn" onClick={() => this.setState({isOpen: false})}>Close</button>
                            </div>



                            <div>
                                {this.state.text  && (
                                    <div>
                                        <h3 style={{color: "red"}}>{this.state.text !== "ok" ? this.state.text : "" }</h3>
                                        {this.state.text === "ok" && (
                                            <div className="mt-4 p-4 border rounded-lg shadow-md bg-gray-50 text-left">
                                                <h2 className="text-xl font-bold mb-3 text-blue-600">Thông tin chi tiết</h2>
                                                <div className="space-y-2">
                                                    <div className="flex justify-between">
                                                        <span className="font-medium">Tên:</span>
                                                        <span>{this.state.user.fullName}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="font-medium">Email:</span>
                                                        <span>{this.state.user.email}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="font-medium">Tuổi:</span>
                                                        <span>{this.state.user.age}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )
                                }
                            </div>
                        </div>





                    </dialog>
                )}
            </div>
        )
    }

}

export default Ex5