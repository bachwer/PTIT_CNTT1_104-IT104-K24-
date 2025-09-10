import {Link} from "react-router-dom";
import {Outlet} from "react-router";


export default function (){


    return(
        <div>

            <h1>Teams Page</h1>
            <nav>
                <ul>
                    <li><Link to="team1">Team 1</Link></li>
                    <li><Link to="team2">Team 2</Link></li>
                    <li><Link to="team3">Team 3</Link></li>
                </ul>
            </nav>


            <Outlet />
        </div>
    )
}