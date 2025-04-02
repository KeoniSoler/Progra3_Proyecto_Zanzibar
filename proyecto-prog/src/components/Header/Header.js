import React from "react";
import Navbar from "./Navbar";
import OpcionesMenu from "./OpcionesMenu";
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
            class: "separacion-cajas-arriba",
            path: "login.html"
        },
        {
            name: "REGISTRO",
            id: "registrolink",
            class: "separacion-cajas-arriba",
            path: "register.html"
        },
        {
            name: "CARRITO",
            id: "carrlink",
            class: "separacion-cajas-arriba",
            path: "cart.html"
        },
        {
            name: "LOGOUT",
            id: "logoutLink",
            class: "separacion-cajas-arriba",
            path: "#"
        },
    ]
    return(
        <header>
            <Navbar nav={barra}/>
            <OpcionesMenu menu={opciones} />
        </header>
    )
}

export default Header