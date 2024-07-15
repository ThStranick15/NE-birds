import { NavLink } from "react-router-dom"

export default function ActionCardRight(){

    return(
        <NavLink className="card rightCard" to={"/practice"}>
            <h2>Test yourself with our identification quiz!</h2>
            <img src="/Birds/Images/Male-Northern-Cardinal.jpg" alt="Cardinal" />
        </NavLink>
    )
}