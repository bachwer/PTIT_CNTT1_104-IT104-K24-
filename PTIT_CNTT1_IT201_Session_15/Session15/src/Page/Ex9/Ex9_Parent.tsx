import {type ChangeEvent, Component} from 'react';
import Todo from './Ex9_list'
import "./Ex9.css"


export interface Todolist{
    id: number;
    todo:string;
    status: boolean;

}
interface State {
    list: Todolist[];
    inputValue: string;
}
let id = 0

export default class Ex9 extends Component<{}, State>{
    constructor(props: {}){
        super(props)
        this.state = {
            list:[{id: id, todo: "Nau Com", status:true}],
            inputValue: ""
        }
    }

    Edit = (todoNew: string, id: number) => {
        this.setState((prev) => ({
            list: prev.list.map((todo) =>
                todo.id === id ? { ...todo, todo: todoNew } : todo
            ),
        }));
    };

    addList = () => {

       if(this.state.inputValue !== ""){
           this.state.list.push({id:  ++id, todo: this.state.inputValue, status: false})

           this.setState({
               inputValue : "",
           })
       }else{
           alert("invalid!!");
       }
    }

    handleInput = (e: ChangeEvent<HTMLInputElement>) =>{
            this.setState({
                inputValue : e.target.value
            })
    }


    checked = (id:number) => {
        this.setState(prevState => ({
            list: prevState.list.map(item => item.id === id ? {...item, status: !item.status}: item)
        }));
    }

    Delete = (id:number) => {
        this.setState(prevState => ({
            list: prevState.list.filter(item => item.id !== id)
        }))
    }

    render(){
        return(
            <div className={"container"}>
                <h1>Danh sách công việc</h1>
              <div className={"inputButton"}>

                  <button onClick={this.addList}>Thêm</button> <input value={this.state.inputValue} onChange={this.handleInput} placeholder={"......."}/>
              </div>


                <Todo data={this.state.list}
                      checked={this.checked}
                      Delete ={this.Delete}
                      edit={this.Edit}
                />



            </div>
        )
    }
}


