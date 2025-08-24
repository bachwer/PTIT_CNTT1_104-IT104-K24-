import {Component, type ChangeEvent} from "react"

interface email{
    email:string;
}

export default class Ex1_getValueWithFromInput extends Component<{}, email>{
    constructor(props: {}) {
        super(props);
        this.state = {email:""};
    }


    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState({
            ...this.state,
            [name]: value,
        } as unknown as email);


    }

    handelSub = () => {
        console.log(this.state)
    }

    render(){
        return(
            <div>
                <input onChange={this.handleChange} name="email" /><button onClick={this.handelSub}>Submit</button>
            </div>
        )
    }

}