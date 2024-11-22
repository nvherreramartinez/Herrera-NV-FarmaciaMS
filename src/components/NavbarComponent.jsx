import CartWidget from "./CarWidget"
import { NavLink } from "react-router-dom"

const NavbarComponent = () =>{
    return(
        <nav className="navContainer">
            <NavLink className="aLink">Medicamentos</NavLink>
            <NavLink className="aLink">Laboratorios</NavLink>
            <NavLink className="aLink">Ofertas</NavLink>
            <NavLink className="aLink">Obras Sociales</NavLink>
            <CartWidget counter={15}/>
        </nav>
    )
}

export default NavbarComponent