import React from "react";
import './styles.css';

function OpcionesMenu(props) { }
return (
    <nav class="navegador">
        {
            props.menu.map((elm, idx) => <a key={`${idx}-${elm.name}`}>{elm.name}</a>)
        }
    </nav>
)
export default OpcionesMenu

