import React from "react";
import {Link} from "react-router-dom";
import './styles.css';

function Navbar(props) {
    return (
        <nav className="nav">
            {
                props.barra.map((elm, idx) => <Link to={elm.path} className={elm.className} key={`${idx}-${elm.name}`}>{elm.name}</Link>)
            }
            <span id="mensajeBienvenida"></span>
        </nav>
    );
}
export default Navbar

