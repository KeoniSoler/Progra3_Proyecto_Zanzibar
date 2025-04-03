import React from "react";
import SeccionRopaHombre from "./SeccionRopaHombre";
import SeccionAccesorios from "./SeccionAccesorios";
import {Link} from "react-router-dom";
import './styles.css';

function SeccionesHome() {
    let ropa = [
        {
            Imagen: "",
            Titulo: "Bolso de mano",
            Descripcion: "index.html",
            Precio: 50.99,
            VerMas: "index.html"
        },
        {
            Imagen: "",
            Titulo: "Bolso de mano",
            Descripcion: "index.html",
            Precio: 50.99,
            VerMas: "index.html"
        },
        {
            Imagen: "",
            Titulo: "Bolso de mano",
            Descripcion: "index.html",
            Precio: 50.99,
            VerMas: "index.html"
        },
        {
            Imagen: "",
            Titulo: "Bolso de mano",
            Descripcion: "index.html",
            Precio: 50.99,
            VerMas: "index.html"
        },
        {
            Imagen: "",
            Titulo: "Bolso de mano",
            Descripcion: "index.html",
            Precio: 50.99,
            VerMas: "index.html"
        },
    ]
    let items = [
        {
            Imagen: "",
            Titulo: "Bolso de mano",
            Descripcion: "index.html",
            Precio: 50.99,
            VerMas: "index.html"
        },
        {
            Imagen: "",
            Titulo: "Bolso de mano",
            Descripcion: "index.html",
            Precio: 50.99,
            VerMas: "index.html"
        },
        {
            Imagen: "",
            Titulo: "Bolso de mano",
            Descripcion: "index.html",
            Precio: 50.99,
            VerMas: "index.html"
        },
        {
            Imagen: "",
            Titulo: "Bolso de mano",
            Descripcion: "index.html",
            Precio: 50.99,
            VerMas: "index.html"
        },
        {
            Imagen: "",
            Titulo: "Bolso de mano",
            Descripcion: "index.html",
            Precio: 50.99,
            VerMas: "index.html"
        },
    ]
    return(
        <main>
            <h2 className="subtitulo"><Link to={"./category.html?category=men's clothing"}>ROPA HOMBRES</Link></h2>
            <SeccionRopaHombre prendas={ropa} />
            <h2 className="subtitulo"><Link to={"./category.html?category=jewelery"}>ACCESORIOS</Link></h2>
            <SeccionAccesorios accesorio={items} />
        </main>
    )
}

export default SeccionesHome