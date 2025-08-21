import {type ChangeEvent, Component} from "react";

interface Account{
    name:string,
    email: string,
    passWorld:string,
    phoneNumber:string,
}

export default class Ex7_FromSignAccount extends Component<{}, Account>{
    constructor(props:{}) {
        super(props);
        this.state = {
            name: "",
            email: "",
            passWorld: "",
            phoneNumber: ""
        }
    }
    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      this.setState({
        ...this.state,
        [name]: value,
      } as unknown as Account);
    }

    submitAction = () => {
      localStorage.setItem("data", JSON.stringify(this.state));
    }


    render() {
        return (
          <div>
            <h1>Dang ki tai khoan</h1>

            <p>Name: </p>
            <input onChange={this.handleChange} name="name" value={this.state.name} />

            <p>email:</p>
            <input onChange={this.handleChange} name="email" value={this.state.email} />

            <p>passWorld: </p>
            <input onChange={this.handleChange} name="passWorld" type="password" value={this.state.passWorld} />

            <p>PhoneNumber: </p>
            <input onChange={this.handleChange} name="phoneNumber" value={this.state.phoneNumber} />

            <button type="button" onClick={this.submitAction}>Submit</button>
          </div>
        )
    }

}
