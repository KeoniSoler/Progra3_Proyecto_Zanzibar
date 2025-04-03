import React from "react";
import './styles.css';

function SeccionRopaHombre(props) {
    return (
        <section className="sectionropahombres">
            {
                props.prendas.map((elm, idx) => <article className="articleHome" key={`${idx}-${elm.Imagen}-${elm.Titulo}-${elm.Descripcion}-${elm.Precio}-${elm.VerMas}`}>{elm.Imagen}{elm.Titulo}{elm.Descripcion}{elm.Precio}{elm.VerMas}</article>)
            }
        </section>
    );
}
export default SeccionRopaHombre

