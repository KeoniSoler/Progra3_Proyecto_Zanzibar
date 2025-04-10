import React from "react";
import SeccionesHome from "../../components/SeccionesHome/SeccionesHome";
import Buscador from "../../components/Buscador/Buscador";
 

function Home() {
    return (
        <React.Fragment>
        <Buscador />
        <SeccionesHome />
        </React.Fragment>
    )
}

export default Home;