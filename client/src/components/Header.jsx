import {useLocation, NavLink} from "react-router-dom"

export default function Header() {

    let location = useLocation()
    console.log(location)
    return(
        <header>
            {location.pathname !== "/" && <NavLink to={'/'}>Home</NavLink>}
            <h1>Birds of New Jersey</h1>
        </header>
    )
}

