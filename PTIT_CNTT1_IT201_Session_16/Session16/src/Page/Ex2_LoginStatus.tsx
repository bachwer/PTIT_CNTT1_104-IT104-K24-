import {Component} from 'react'


interface login{
    text : string;
    isOpen: boolean;
    BtnText: string;
    isLogin: boolean,
}


export default class Ex2 extends Component<{}, login> {
    constructor(props: {}){
        super(props);
        this.state = {
            text: "Dang Nhap",
            isOpen: false,
            BtnText: "Dang Nhap",
            isLogin: false,
        }
    }

    handleSignIn = ()=> {
        if(!this.state.isLogin){
            this.setState({
                text:"Xin Chao User",
                BtnText: "Dang Xuat",
                isLogin: true,
            })
        }else{
            this.setState({
                text:"Dang Nhap",
                BtnText: "Dang Nhap",
                isLogin: false,
            })
        }
    }

    render(){
        return(
            <div>
                <button className="btn" onClick={() => this.setState({isOpen: true})}>Sign In</button>
                {this.state.isOpen && (
                    <dialog id="my_modal_1" className="modal" open>
                        <div className="modal-box">
                            <h2>{this.state.text}</h2>
                            <button className="btn" onClick={this.handleSignIn}>{this.state.BtnText}</button>
                            <div className="modal-action">
                                <button className="btn" onClick={() => this.setState({isOpen: false})}>Close</button>
                            </div>
                        </div>
                    </dialog>
                )}
            </div>
        )
    }
}



