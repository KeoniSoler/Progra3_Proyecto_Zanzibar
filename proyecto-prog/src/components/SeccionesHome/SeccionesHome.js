import React from "react";
import { Link } from "react-router-dom";
import SeccionMasPopulares from "./SeccionMasPopulares";
import SeccionEnCartelera from "./SeccionEnCartelera";
import popu from "./DataPopu";
import items from "./DataCarte";
import VerPopulares from "../../screens/VerPopulares/VerPopulares";
import './styles.css';

function SeccionesHome() {
    return(
        <main>
            <h2 className="subtitulo"><Link to={"verpopulares"}>PELICULAS MAS POPULARES</Link></h2>
            <section className="sectionpopulares">
            {
                popu.map((elm, idx) => <SeccionMasPopulares key={idx} datos={elm}/>)
            }
            </section>
            <p className="linkvermas"><Link to={"verpopulares"}>Ver Todas</Link></p>
            <h2 className="subtitulo"><Link to={"vercartelera"}>PELICULAS EN CARTELERA</Link></h2>
            <section className="sectionencartelera">
            {
                items.map((elm, idx) => <SeccionEnCartelera key={idx} datos={elm}/>)
            }
            </section>
            <p className="linkvermas"><Link to={"vercartelera"}>Ver Todas</Link></p>
        </main>
    )
}

export default SeccionesHome
