import {Button, Form, InputGroup} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";


export default function (){

    const navigate = useNavigate()
    const [string, setStr] = useState("")



    const handelInput = (e: React.ChangeEvent<HTMLInputElement>)=> {
        setStr(e.target.value);
    }

    const handelSubmit = () => {

        navigate(`/product?Search=${string}`);
    }

    return(
        <div className={"w-[500px] m-auto mt-5"}>
            <InputGroup className="mb-3">
                <Form.Control
                    onChange={handelInput}
                    value={string}
                    placeholder="Search.."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button onClick={handelSubmit} variant="outline-secondary" id="button-addon2">
                    Search
                </Button>
            </InputGroup>
        </div>
    )

}