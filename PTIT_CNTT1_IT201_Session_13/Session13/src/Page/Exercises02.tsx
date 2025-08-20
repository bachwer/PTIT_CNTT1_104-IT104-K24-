import { Component } from "react";


interface Exercises02State {
    id: number,
    name:string;
    date: string;
    address: string;
}


class Exercises02 extends Component<{}, Exercises02State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            id: 1,
            name: "Nguyen Van A",
            date: "20/03/2000",
            address: "Ha Noi",
        }
    }

    render() {
        return(
            <div style={{margin: "auto", width: "200px"}}>
                <><h2>Thong tin ca nhan</h2>
                    <p>id: {this.state.id}</p>
                    <p>name: {this.state.name}</p>
                    <p>date: {this.state.date}</p>
                    <p>address: {this.state.address}</p>
                </>
            </div>

    )
    }
}
export default Exercises02;