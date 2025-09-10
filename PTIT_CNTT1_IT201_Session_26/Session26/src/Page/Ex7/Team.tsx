import {useParams} from "react-router-dom";


export default function (){
    const {tempId} = useParams()


    return(
        <div>
            <h2>Team Detail</h2>
            <p>Your are viewing details for team: {tempId}</p>
        </div>
    )
}