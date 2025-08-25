import  {Component} from "react";

interface Counter{
    count: number,
}

export default class Ex4 extends Component <{}, Counter>{
    constructor(props: {}){
        super(props)

        this.state = {
            count: 0,
        }
    }
    handleCount = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }

    render(){
        return(
            <div className="flex flex-col items-center justify-center space-y-4">
                <h1 key={this.state.count} className="text-6xl font-bold animate-pop">
                    {this.state.count}
                </h1>
                <button
                    type="button"
                    onClick={this.handleCount}
                    className="btn btn-danger"
                >
                    Click me pl
                </button>
            </div>
        )
    }

}



