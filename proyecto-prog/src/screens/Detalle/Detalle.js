import React, { Component } from "react";
import DetalleCard from "../../components/DetalleCard/DetalleCard";

class Detalle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
        }
    }
    componentDidMount() {
        const { id } = this.props.match.params; // Trae el id de la pelicula de los parametros de la URL
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=fb93fcd4664bbfe64f105075e91d8d7c`) //Busca la informacion del id especifico de la pelicula clickeada
            .then((response) => response.json())
            .then((data) => {
                this.setState({ //Guarda los datos de la pelicula en el estado
                    data: data,
                });
            })
            .catch((error) => console.log(error))
    }
    render() {
        return (
            <React.Fragment>
                <h2 className="subtitulo">DETALLE:</h2>
                {
                    this.state.data !== null ?
                        <DetalleCard data={this.state.data} />
                        :
                        <p>Cargando...</p>
                }
            </React.Fragment>
        )
    }
}

export default Detalle;

