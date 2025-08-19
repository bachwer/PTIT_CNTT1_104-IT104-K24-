
import React, { useState } from "react";


const EX2_Calculation: React.FC = () => {
    // display is current value
    // setDisplay is update for display
    const [display, setDisplay] = useState<string>("");


    // add string in display
    const addToDisplay = (value:string) => {
        setDisplay((prev) => prev + value);

    }


    const clearDisplay = () => {
        setDisplay("");
    };

    const calculate = () => {
        try{
            // eval is function calculator string "1 + 2" as 1 + 2;
            const result = eval(display);
            setDisplay(String(result));
        } catch (error) {
            setDisplay("Error");
        }
    }
    return (
        <div className="calculator">
            <input type="text" value={display} readOnly />
            <br/>
            <input type="button" value="7" onClick={() => addToDisplay("7")}/>
            <input type="button" value="8" onClick={() => addToDisplay("8")}/>
            <input type="button" value="9" onClick={() => addToDisplay("9")}/>
            <br/>
            <input type="button" value="4" onClick={() => addToDisplay("4")}/>
            <input type="button" value="5" onClick={() => addToDisplay("5")}/>
            <input type="button" value="6" onClick={() => addToDisplay("6")}/>
            <br/>
            <input type="button" value="1" onClick={() => addToDisplay("1")}/>
            <input type="button" value="2" onClick={() => addToDisplay("2")}/>
            <input type="button" value="3" onClick={() => addToDisplay("3")}/>
            <br/>
            <input type="button" value="0" onClick={() => addToDisplay("0")}/>


            <input type="button" value="." onClick={() => addToDisplay(".")}/>
            <input type="button" value="-" onClick={() => addToDisplay("-")}/>
            <br/>
            <input type="button" value="/" onClick={() => addToDisplay("/")}/>
            <input type="button" value="*" onClick={() => addToDisplay("*")}/>
            <input type="button" value="+" onClick={() => addToDisplay("+")}/>


            <input type="button" value="=" onClick={() => calculate()}/>
            <br/>
            <input type="button" value="C" onClick={() => clearDisplay()}/>
        </div>
    );
}

export default EX2_Calculation;