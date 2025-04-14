import React from "react";
import './styles.css';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <React.Fragment>
            <footer className="footer">
                <div>
                    <Link to="/"> <img src="../../imagenes/zanzibarlogo.png" alt="footer-logo" className="footer-logo" /> </Link>
                </div>
                <p className="participantes"> Keoni Soler | Salvador de los Heros <br /> PROYECTO PROGRAMACION</p>

            </footer>
        </React.Fragment>
    )
}
export default Footer