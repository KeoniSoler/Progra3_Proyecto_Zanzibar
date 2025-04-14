import React from "react";
import './styles.css';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function NotFound() {
    return (
        <React.Fragment>
            <div className="notfound">
                <h1>ERROR 404</h1>
                <p>Contenido Inexistente</p>
                <p className="texto">La pagina que estas tratando de buscar no existe. Pruebe volviendo al inicio e intente de otra forma.</p>
                <Link to="/"><div className="volver">Volver al inico</div></Link>
            </div>

        </React.Fragment>
    )
}

export default NotFound;