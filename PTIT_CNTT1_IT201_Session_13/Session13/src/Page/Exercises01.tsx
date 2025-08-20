import {Component} from "react";


interface Exercises01State {
    myName: string;
}

class Exercises01 extends Component<{}, Exercises01State> {
   state: Exercises01State = {
       myName: "Nguyen Van A"
   }

    render() {
        return (
            <h1 style={{textAlign: "center"}}>{this.state.myName}</h1>
        )
    }
}

export default Exercises01;