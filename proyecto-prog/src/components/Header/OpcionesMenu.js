import React from "react";
import { Link } from "react-router-dom";
import './styles.css';

function OpcionesMenu(props) {
    return (
        <nav className="navegador">
            {
                props.menu.map((elm, idx) => <Link to={elm.path} key={`${idx}-${elm.name}`}>{elm.name}</Link>)
            }
        </nav>
    )
}
export default OpcionesMenu

