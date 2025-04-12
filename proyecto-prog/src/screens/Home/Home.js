import React from "react";
import SeccionesHome from "../../components/SeccionesHome/SeccionesHome";
import Buscador from "../../components/Buscador/Buscador";
 

function Home(props) {
    return (
        <React.Fragment>
        <Buscador history={props.history}/>
        <SeccionesHome />
        </React.Fragment>
    )
}

export default Home;