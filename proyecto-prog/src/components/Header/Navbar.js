import React from "react";
import './styles.css';

function Navbar(props) {
    return (
        <nav class="nav">
            {
                props.barra.map((elm, idx) => <a key={`${idx}-${elm.name}`}>{elm.name}</a>)
            }
            <span id="mensajeBienvenida"></span>
        </nav>
    );
}
export default Navbar

