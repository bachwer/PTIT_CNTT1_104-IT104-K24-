import {Component, type ChangeEvent} from "react";

interface color{
    color:string
}


export default class Ex2_Color extends Component<{}, color> {
    constructor(props: {}) {
        super(props);

        this.state = {color: "#FFF"}
    }

    handleInput = (e: ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = e.target;
        this.setState({
            ...this.state,
            [name]: value,
        })
    }



    render(){
        return(

            <div>
                <h1>Color: {this.state.color} </h1>
                <input onChange={this.handleInput} name="color" type={"color"}/>
                <button>Submit</button>
            </div>
        )
    }




}