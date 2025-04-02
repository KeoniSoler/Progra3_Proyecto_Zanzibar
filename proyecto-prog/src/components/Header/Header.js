import React from "react";
import Navegacion from "../Navegacion/Navegacion";
import OpcionesMenu from "./OpcionesMenu";

function Header() {
    return(
        <header>
            <nav class="nav"><Navegacion/></nav>
            <nav class="navegador"><OpcionesMenu/></nav>
        </header>
    )
}

export default Header