import React from "react";


class User  {
    firstName : string
    lastName : string
    constructor(first:string, last:string) {
        this.firstName = first;
        this.lastName = last;
    }
}
interface UserProps {
    User: User;
}

const User1 = new User("Nguyen Van", "A")


const FormatName : React.FC<UserProps> = ({User}) => {

    return(
        <div style={{margin: "auto", textAlign: "center"}}>
            <h1>{User.firstName} {User.lastName}</h1>
        </div>
    )
}

export default function App() {
    return <FormatName User={User1} />;
}