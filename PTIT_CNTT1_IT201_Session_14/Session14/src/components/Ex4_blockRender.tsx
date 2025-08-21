import {Component} from "react";

interface State{
    contents: string;
}
class Ex4_blockRender extends Component<{}, State> {
    constructor(props: {}) {
        super(props);

        this.state = {
            contents: "Hoc code de di lam"
        }
    };

    handleChange = () =>{
        this.setState({
            contents: "Hoc code de Thanh cong"
        })
    }

    shouldComponentUpdate(_nextProps: {}, nextState: {contents:string}) {
        console.log("new: ", nextState.contents);
        return false;
    }


    render(){
        return(
            <div>
                <h1>Content: {this.state.contents}</h1>
                <button onClick={this.handleChange}></button>
            </div>
        )
    }
}

export default Ex4_blockRender