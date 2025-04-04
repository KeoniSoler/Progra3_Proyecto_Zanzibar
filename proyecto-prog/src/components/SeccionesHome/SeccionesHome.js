import React from "react";
import { Link } from "react-router-dom";
import SeccionRopaHombre from "./SeccionRopaHombre";
import SeccionAccesorios from "./SeccionAccesorios";
import ropa from "./DataRopa";
import items from "./dataAcces";
import './styles.css';

console.log(ropa);
function SeccionesHome() {
    return(
        <main>
            <h2 className="subtitulo"><Link to={"./category.html?category=men's clothing"}>ROPA HOMBRES</Link></h2>
            {
                ropa.map((elm, idx) => <SeccionRopaHombre key={idx} datos={elm}/>)
            }
            <h2 className="subtitulo"><Link to={"./category.html?category=jewelery"}>ACCESORIOS</Link></h2>
            {
                items.map((elm, idx) => <SeccionAccesorios key={idx} datos={elm}/>)
            }
        </main>
    )
}

export default SeccionesHome
