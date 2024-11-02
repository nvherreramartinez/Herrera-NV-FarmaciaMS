import CartWidget from "./CarWidget"

const NavbarComponent = () =>{
    return(
        <nav className="navContainer">
            <a className="aLink">Medicamentos</a>
            <a className="aLink">Laboratorios</a>
            <a className="aLink">Ofertas</a>
            <a className="aLink">Obras Sociales</a>
            <CartWidget counter={15}/>
        </nav>
    )
}

export default NavbarComponent
