import React from "react";

function Detalle() {
    const idObjeto = props.match.params.id
    return (
        <React.Fragment>
        <h1>Detalle {idObjeto}</h1>
        </React.Fragment>
    )
}

export default Detalle;