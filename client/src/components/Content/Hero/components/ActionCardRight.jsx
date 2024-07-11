import { NavLink } from "react-router-dom"

export default function ActionCardRight(){

    return(
        <NavLink className="rightCard" to={"/practice"}>
            <h2>Test yourself with our identification quiz!</h2>
            <p>Img Goes Here</p>
        </NavLink>
    )
}