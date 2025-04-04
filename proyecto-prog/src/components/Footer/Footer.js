import React from "react";
import './styles.css';

function Footer (){
    return (
        <React.Fragment> 
        <footer className="footer"> 
        <div>
            <img src="imagenes/zanzibarlogo.png" alt="footer-logo" class="footer-logo"/>
        </div>
            <p>Desarrollado por: Keoni Soler y Salvador de los Heros</p>

        </footer>
        </React.Fragment>
    )
}
export default Footer