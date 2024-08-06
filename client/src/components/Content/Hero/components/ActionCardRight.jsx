import { NavLink } from "react-router-dom"

export default function ActionCardRight(){

    return(
        <NavLink className="card rightCard" to={"/practice"}>
        <div className="card-text">
            <h2>Test yourself with our identification quiz!</h2>
            <div className="line"></div>
        </div>
            <img src="/Birds/Images/Male-Northern-Cardinal.jpg" alt="Cardinal" />
            
        </NavLink>
    )
}