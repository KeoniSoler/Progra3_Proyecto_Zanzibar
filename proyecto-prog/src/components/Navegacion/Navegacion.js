import React from "react";

function Navegacion() {
    <>
        <a href="login.html" id="loginlink" class="separacion-cajas-arriba">LOGIN</a>
        <a href="register.html" id="registrolink" class="separacion-cajas-arriba">REGISTRO</a>
        <a href="cart.html" class="separacion-cajas-arriba">CARRITO</a>
        <span id="mensajeBienvenida"></span>
        <a href="#" id="logoutLink" class="separacion-cajas-arriba">LOGOUT</a>
    </>
}

export default Navegacion