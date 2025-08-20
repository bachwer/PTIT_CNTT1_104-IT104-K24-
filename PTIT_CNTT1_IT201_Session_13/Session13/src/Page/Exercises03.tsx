import { Component } from "react";

interface User{
    id: number;
    name: string;
    age:number;
}

const users: User[] = [
    {id:1, name: "John", age: 30},
    {id:2, name: "Mary", age: 20},
    {id:3, name: "Jen", age: 25},

]

class Exercises03 extends Component<{}, { users: User[] }>{
    constructor(props: {}){
        super(props);
        this.state = {
            users: users,
        };
    }

    render() {
        return (
           <table className={'tableEx3'}>
               <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
               </thead>
               <tbody>
               {
                    this.state.users.map(a => (
                        <>
                        <tr>
                            <td>{a.id}</td>
                            <td>{a.name}</td>
                            <td>{a.age}</td>
                        </tr>
                        </>
                    ))
               }
               </tbody>
           </table>
        )
    }
}
export default Exercises03;