import {type ChangeEvent, Component} from "react";


interface Progress {
    progress: number,
}
export default class Ex4_getValueRange extends Component<{}, Progress>{
    constructor(props: {}){
        super(props);
        this.state = {progress: 50}
    }
    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({progress: parseInt(e.target.value)})

    }


    render(){
        return(
            <div>
                <h1>{this.state.progress}</h1>
                <input onChange={this.handleChange} type={"range"}/>
            </div>
        )
    }
}