import React from "react";
import { Link } from "react-router-dom";
import './styles.css';

function LogoHeader() {
    return (
        
        <div className="divlogo">
            <Link to="/"><img src="../../imagenes/zanzibarlogo.png" alt="zanzibar-logo" className="logoprincipal" /></Link>
        </div>

    );
}
export default LogoHeader