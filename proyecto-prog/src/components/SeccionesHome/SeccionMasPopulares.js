import React, {Component} from "react";
import { Link } from "react-router-dom";
import './styles.css';

class SeccionMasPopulares extends Component {
    constructor(props){
        super(props)
        this.state={
            data: this.props.datos,
            mostrarContenido: true,
        }
    }
    ocultar (){
        this.setState({
            mostrarContenido: !this.state.mostrarContenido,
        })
    }
    render() {
        return (
            
                <article className="articleHome">
                    <img src="${data[i].image}" alt="Mas vistas" className="imagenes"/>
                    <h4>{this.state.data.Titulo}</h4>
                    {
                       this.state.mostrarContenido === true ?
                       <>
                            <p>
                                {this.state.data.Descripcion}
                            </p>
                       </>
                       :
                       ''
                    }
                    <button onClick={() => this.ocultar} className="estilobotones">
                        Ver descripcion
                    </button>
                    <button className="estilobotones">
                        <Link to={"/detalle/:id"}>Ir a detalle</Link>
                    </button>
                    <button className="estilobotones">
                        Agregar Favoritos
                    </button>
                </article>
           
        );
    }
}
export default SeccionMasPopulares

