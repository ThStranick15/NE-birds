import { NavLink } from "react-router-dom";

export default function ActionCardLeft(){

    return(
        <NavLink className="card leftCard" to={"/dictionary"}>
            <img src="/Birds/Images/Blue-Jay.jpg" alt="Blue Jay" />
            <h2>Check out our list of Common Birds</h2>
        </NavLink>
    )
}