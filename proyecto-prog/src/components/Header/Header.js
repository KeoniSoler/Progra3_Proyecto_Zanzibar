import React from "react";
import Navbar from "./Navbar";
import OpcionesMenu from "./OpcionesMenu";
import LogoHeader from "./LogoHeader";
import './styles.css';

function Header() {
    let opciones = [
        {
            name: "HOME",
            path: "index.html"
        },
        {
            name: "ELECTRONICA",
            path: "category.html?category=electronics"
        },
        {
            name: "ACCESORIOS",
            path: "category.html?category=jewelery"
        },
        {
            name: "HOMBRE",
            path: "category.html?category=men's clothing"
        },
        {
            name: "MUJER",
            path: "category.html?category=women's clothing"
        },
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