import React, {Component} from "react";
import './styles.css';

class SeccionAccesorios extends Component {
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
            <section className="sectionaccesorios">
                <article className="articleHome">
                    <img src="${data[i].image}" alt="Accesorios" class="imagenes"/>
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
                    <button onClick={() => this.ocultar}>
                        Ver descripcion
                    </button>
                    <button>
                        Ir a detalle
                    </button>
                    <button>
                        Agregar Favoritos
                    </button>
                </article>
            </section>
        );
    }
}
export default SeccionAccesorios