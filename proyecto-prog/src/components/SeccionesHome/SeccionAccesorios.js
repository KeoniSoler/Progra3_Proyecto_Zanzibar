import React from "react";
import './styles.css';
import react from "react";

function SeccionAccesorios(props) {
    return (
        <section className="sectionaccesorios">
            {
                props.accesorio.map((elm, idx) => <article className="articleHome" key={`${idx}-${elm.Imagen}-${elm.Titulo}-${elm.Descripcion}-${elm.Precio}-${elm.VerMas}`}>{elm.Imagen}{elm.Titulo}{elm.Descripcion}{elm.Precio}{elm.VerMas}</article>)
            }
        </section>
    );
}
export default SeccionAccesorios

