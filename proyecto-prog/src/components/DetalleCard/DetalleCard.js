import React, { Component } from "react";

class DetalleCard extends Component {
    constructor(props){
        super(props)
        this.state={
            data: props.data,
            mostrarContenido: true,
            favorito: false,
        }
    }
    ocultar (){
        this.setState({
            mostrarContenido: !this.state.mostrarContenido,
        })
    }

    // Una vez agregado a favoritos se guarda en localStorage, pero al actualizar la pagina, no aparece el cartel de sacar favorito. 
    //Es decir, que no reconoce que esta en favoritos (localStorage). Entonces creo un componentDidMount para solucionarlo

    componentDidMount(){
        let storage = localStorage.getItem('favoritos')
        if (storage !== null){
           let storageParseado = JSON.parse(storage)
           let miId = storageParseado.includes(this.state.data.id) // el includes retorna un true o un false
            
           if (miId){
                this.setState({favorito: true,})
           }
        }

    }
    
    agregarFavoritos(id){
        let storage = localStorage.getItem('favoritos')
        if (storage !== null){
            let parseo = JSON.parse(storage)
            parseo.push(id)
            let stringificado = JSON.stringify(parseo)
            localStorage.setItem('favoritos', stringificado)
        } else {
            let array = [id]
            let stringificado = JSON.stringify(array)
            localStorage.setItem('favoritos', stringificado)
        }
        this.setState({	
            favorito: true,
        })
    }

    sacarFavortio(id){
        const storage = localStorage.getItem('favoritos')
        const storageParseado = JSON.parse(storage)
        const filtrarStorage = storageParseado.filter((elm) => elm !== id)
        const storageStringificado = JSON.stringify(filtrarStorage) 
        localStorage.setItem('favoritos', storageStringificado)

        this.setState({
            favorito: false,
        })  
        if(this.props.borrarDeFavoritos !== undefined){
            this.props.borrarDeFavoritos(id)
        }
    }

    render(){
        return(
            <section>
                <article>
                    <img src={'https://image.tmdb.org/t/p/w780/' + this.state.data.poster_path} alt="Mas vistas" className="imagenes"/>
                </article>
                <article>
                    <h4>{this.state.data.title}</h4>
                    <p>Rating: {this.state.data.vote_average}</p>
                    <p>Fecha de estreno: {this.state.data.release_date}</p>
                    <p>Duracion: {this.state.data.runtime}</p>
                    <p>Sinopsis: {this.state.data.overview}</p>
                    <p>Géneros: {this.state.data.genres ? this.state.data.genres.map((genero) => genero.name).join(', ') : 'Cargando géneros...'}</p>                    {
                        this.state.favorito === true ?
                        <button onClick={()=>this.sacarFavortio(this.state.data.id)} className="estilobotones">
                            Sacar Favoritos
                        </button>
                        :
                        <button onClick={()=>this.agregarFavoritos(this.state.data.id)} className="estilobotones">
                        Agregar Favoritos
                        </button>
                    }
                </article>
            </section>
        )
    }
    }

    export default DetalleCard;