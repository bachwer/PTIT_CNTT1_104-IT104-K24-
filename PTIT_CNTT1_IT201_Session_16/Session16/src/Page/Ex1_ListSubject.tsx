import {Component} from 'react'

interface listSubject{
    subjects: string[];
}

export default class Ex1 extends Component<{}, listSubject> {
    constructor(props: {}){
        super(props)

        this.state = {
            subjects: ["Toan", "Van", "Anh", "Hoa", "Sing"]
        }
    }

    render(){
        return(
            <div style={{margin: "auto", width: "400px", padding: "20px", display: "flex", flexDirection: "column", gap: "5px"}}>
                <h2>Danh Sach Mon Hoc</h2>
                {
                    this.state.subjects.map((a) => (
                     <div style={{width: "100%"}}>
                         <button style={{width: "100%"}} >{a}</button>
                     </div>
                        ))
                }
            </div>
        )
    }

}