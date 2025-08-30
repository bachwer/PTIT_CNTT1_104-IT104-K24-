import {type ChangeEvent, useReducer, useState} from "react";


const initialState = {
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
}


function reducer(state: typeof initialState, action: {type: string, field?: string, value?:string}){
    switch (action.type){
        case "update":
            return{
                ...state,
                [action.field!]: action.value,
            }

        case "reset":
            return initialState
        default:
            return state

    }
}



export default function Ex8_form(){

    const [state, dispatch] = useReducer(reducer, initialState)
    const [isOpen, setOpen] = useState(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: "update",
            field: e.target.name,
            value: e.target.value,
        })
        check()
    }
    const check = () => {
       if( state.name != "" && state.email != "" && state.address != "" && state.phoneNumber != ""){
           setOpen(true)
       }
    }



    return(
        <form>
            <label>
                Name:
                <input name={"name"} onChange={handleChange} value={state.name}/>
            </label>


            <label>
                Emai:
                <input name={"email"} onChange={handleChange} value={state.email}/>
            </label>


            <label>
                Number Phone:
                <input name={"phoneNumber"} onChange={handleChange} value={state.phoneNumber}/>
            </label>


            <label>
                Address:
                <input name={"address"} onChange={handleChange} value={state.address}/>
            </label>

            {isOpen && (
                <div>
                    <p>Name: {state.name}</p>
                    <p>Email: {state.email}</p>
                    <p>Phone: {state.phoneNumber}</p>
                    <p>Address: {state.address}</p>
                </div>
            )

            }
        </form>
    )
}