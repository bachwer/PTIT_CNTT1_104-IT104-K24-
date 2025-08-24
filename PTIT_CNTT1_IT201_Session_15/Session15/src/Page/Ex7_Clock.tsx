import {Component} from 'react';

interface State{
    time: string;
}


export default class Ex7_clock extends Component <{}, State>{
    private timerId?: ReturnType<typeof setInterval>;

    constructor(props: {}){
        super(props);

        this.state = {
            time: new Date().toString()
        }
    };

    //Chạy 1 lần duy nhất sau khi component render lần đầu ra giao
    componentDidMount(){
        this.timerId = setInterval(() => {
            this.setState({
                time:new Date().toLocaleTimeString(),
            });
        }, 1000);
    }


    componentWillUnmount(){
        if(this.timerId){
            clearInterval(this.timerId);
        }
    }


    render(){
        return(
            <div style={{textAlign: "center"}}>
                <h1>Gioi hien tai {this.state.time}</h1>
            </div>
        )
    }

}