import {type ChangeEvent, Component} from "react";



interface dateData{
    date: string;
    submittedDate: string;
}
export default class Ex3_getDate extends Component<{}, dateData>{
    constructor(props: {}) {
        super(props);
        this.state = {date:"", submittedDate: ""}
    }

    functionSub = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            date: e.target.value
        })
    }
    handleSubmit = () => {
        this.setState({ submittedDate: this.state.date });
    }


    render(){
        return(
            <div>
                <h1>date: {this.state.submittedDate}</h1>
                <input onChange={this.functionSub} name="date" type={"date"}/>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }

}