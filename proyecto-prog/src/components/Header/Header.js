import React from "react";
import Navbar from "./Navbar";
import OpcionesMenu from "./OpcionesMenu";
import LogoHeader from "./LogoHeader";
import './styles.css';

function Header() {
    let opciones = [
        {
            name: "HOME",
            path: "/"
        },
        {
            name: "FAVORITOS",
            path: "/favoritos"
        },
        {
            name: "POPULARES",
            path: "/verpopulares"
        },
        {
            name: "CARTELERA",
            path: "/vercartelera"
        }
    ]
    let nav = [
        {
            name: "LOGIN",
            id: "loginlink",
            className: "separacion-cajas-arriba",
            path: "login.html"
        },
        {
            name: "REGISTRO",
            id: "registrolink",
            className: "separacion-cajas-arriba",
            path: "register.html"
        },
        {
            name: "CARRITO",
            id: "carrlink",
            className: "separacion-cajas-arriba",
            path: "cart.html"
        },
        {
            name: "LOGOUT",
            id: "logoutLink",
            className: "separacion-cajas-arriba",
            path: "#"
        },
    ]
    return(
        <header>
            <Navbar barra={nav}/>
            <LogoHeader />
            <OpcionesMenu menu={opciones} />
        </header>
    )
}

export default Header