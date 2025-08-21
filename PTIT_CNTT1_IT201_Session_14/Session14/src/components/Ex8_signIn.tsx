import {type ChangeEvent, Component } from "react";

interface Account {
    name: string;
    email: string;
    passWorld: string;
    phoneNumber: string;
}

interface LoginState {
    email: string;
    passWorld: string;
    message: string;
}

let data: Account = JSON.parse(localStorage.getItem("data") || "{}");

export default class Ex8_signIn extends Component<{}, LoginState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            email: "",
            passWorld: "",
            message: "",
        };
    }

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState({
            ...this.state,
            [name]: value,
        });
    };

    handleSubmit = () => {
        if (this.state.email === data.email && this.state.passWorld === data.passWorld) {
            this.setState({ message: "Đăng nhập thành công ✅" });
        } else {
            this.setState({ message: "Sai email hoặc mật khẩu ❌" });
        }
    };

    render() {
        return (
            <div>
                <h1>Đăng nhập</h1>

                <p>Email:</p>
                <input
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                />

                <p>Mật khẩu:</p>
                <input
                    type="password"
                    name="passWorld"
                    value={this.state.passWorld}
                    onChange={this.handleChange}
                />

                <br />
                <button type="button" onClick={this.handleSubmit}>
                    Login
                </button>

                <p>{this.state.message}</p>
            </div>
        );
    }
}