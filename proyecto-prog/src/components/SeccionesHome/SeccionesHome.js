import React from "react";
import { Link } from "react-router-dom";
import VerPopulares from "../../screens/VerPopulares/VerPopulares";
import './styles.css';

function SeccionesHome() {
    return(
        <main>
            <h2 className="subtitulo"><Link to={"verpopulares"}>PELICULAS MAS POPULARES</Link></h2>
            <VerPopulares />
            <p className="linkvermas"><Link to={"verpopulares"}>Ver Todas</Link></p>
            <h2 className="subtitulo"><Link to={"vercartelera"}>PELICULAS EN CARTELERA</Link></h2>
            
            <p className="linkvermas"><Link to={"vercartelera"}>Ver Todas</Link></p>
        </main>
    )
}

export default SeccionesHome
