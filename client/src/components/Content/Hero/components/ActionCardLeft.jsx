import { NavLink } from "react-router-dom";

export default function ActionCardLeft(){

    return(
        <NavLink className="card leftCard" to={"/dictionary"}>
            <img src="/Birds/Images/Blue-Jay.jpg" alt="Blue Jay" />
            <div className="card-text">
                <h2>Check out our list of Common Birds!</h2>
                <div className="line"></div>
            </div>
            
        </NavLink>
    )
}