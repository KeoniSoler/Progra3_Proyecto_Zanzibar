import React, { Component } from "react";
import './styles.css';

class Filtro extends Component {

    constructor(props) {
        super(props)
        this.state = {
            //Estado inicial del valor del input esta vacío
            valorInput: '',
        }
    }

    manejarSubmit(evento) { 
        evento.preventDefault(); //Prevee el comportamiento por defecto del formulario al recargar la pagina
    }

    //Maneja el valor del input y lo guarda en el estado
    controlarInput(evento) {
        console.log('Lo que llega por el evento', evento)
        this.setState(
            { valorInput: evento.target.value },
            () => this.props.filtro(this.state.valorInput)
        )
    }

    render() {
        return (
            <form onSubmit={(evento) => this.manejarSubmit(evento)} className="formFiltro">
                <input onChange={(evento) => this.controlarInput(evento)} value={this.state.valorInput} placeholder="Filtrar peliculas..."/>
            </form>
        )
    }
}
export default Filtro;