import { NavLink } from "react-router-dom";

export default function ActionCardLeft(){

    return(
        <NavLink className="leftCard" to={"/dictionary"}>
            <p>Img Goes Here</p>
            <h2>Check out our list of Common Birds</h2>
        </NavLink>
    )
}