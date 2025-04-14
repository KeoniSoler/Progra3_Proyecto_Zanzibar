import React, { Component } from 'react';
import { Link } from 'react-router-dom'; //Navegar por la ruta del app.js
import './styles.css';

class MovieCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: props.data,
            mostrarContenido: true,
            favorito: false,
        }
    }

    //Creamos el metodo para ocultar o mostrar la descripcion
    ocultar() {
        this.setState({
            mostrarContenido: !this.state.mostrarContenido,
        })
    }

    // Una vez agregado a favoritos se guarda en localStorage, pero al actualizar la pagina, no aparece el cartel de sacar favorito. 
    //Es decir, que no reconoce que esta en favoritos (localStorage). Entonces creo el metodo componentDidMount para solucionarlo.

    componentDidMount() {
        let storage = localStorage.getItem('favoritos')
        if (storage !== null) {
            let storageParseado = JSON.parse(storage) // Parseamos para que los datos json(string) se puedan usar dentro del codigo(array)
            let miId = storageParseado.includes(this.state.data.id) // el includes retorna un true o un false

            if (miId) {
                //Si esta incluido(True) actualiza el estado para reflejar que es favorito
                this.setState({ favorito: true, })
            }
        }

    }

    agregarFavoritos(id) {
        let storage = localStorage.getItem('favoritos')
        if (storage !== null) {
            let parseo = JSON.parse(storage)
            parseo.push(id) //Agrego un nuevo id con el metodo push al array existente
            let stringificado = JSON.stringify(parseo) // Vuelvo a convertir el array a string(Json)
            localStorage.setItem('favoritos', stringificado)
        } else { //Si no hay nada en localStorage creo un nuevo array con el ese id
            let array = [id]
            let stringificado = JSON.stringify(array)
            localStorage.setItem('favoritos', stringificado)
        }
        this.setState({
            //Actualizo el estado para mostrar el boton sacarFavorito
            favorito: true,
        })
    }

    //Elimina el id del localStorage y actualiza el estado para mostrar el boton agregarFavorito
    sacarFavortio(id) {
        const storage = localStorage.getItem('favoritos')
        const storageParseado = JSON.parse(storage)
        const filtrarStorage = storageParseado.filter((elm) => elm !== id) //filtro el id actual
        const storageStringificado = JSON.stringify(filtrarStorage)
        localStorage.setItem('favoritos', storageStringificado)

        this.setState({
            //Actualizo el estado para mostrar que ya no es favorito
            favorito: false,
        })
        if (this.props.borrarDeFavoritos !== undefined) { //Si la funcion borrarDeFavoritos existe, llamo la funcion que viene por props
            this.props.borrarDeFavoritos(id) 
        }
    }


    render() {
        return (
            <React.Fragment>
                <article className="articleHome">
                    <img src={'https://image.tmdb.org/t/p/w780/' + this.state.data.poster_path} alt="Mas vistas" className="imagenes" />
                    <h4>{this.state.data.title}</h4>
                    {
                        this.state.mostrarContenido === true ?
                            ''
                            :
                            <>
                                <p>
                                    {this.state.data.overview}
                                </p>
                            </>
                    }
                    <button onClick={() => this.ocultar()} className="estilobotones">
                        Ver descripcion
                    </button>
                    <button className="estilobotones">
                        <Link to={`/detalle/${this.state.data.id}`}>Ir a detalle</Link>
                    </button>
                    {
                        this.state.favorito === true ?
                            <button onClick={() => this.sacarFavortio(this.state.data.id)} className="estilobotones">
                                Sacar Favoritos
                            </button>
                            :
                            <button onClick={() => this.agregarFavoritos(this.state.data.id)} className="estilobotones">
                                Agregar Favoritos
                            </button>
                    }
                </article>
            </React.Fragment>
        )
    }
}

export default MovieCard;