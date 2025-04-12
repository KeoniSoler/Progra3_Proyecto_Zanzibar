import React,{Component} from "react";
import MovieCard from "../../components/MovieCard/MovieCard";

class Favoritos extends Component{

    constructor(props){
        super(props)
        this.state={
            pelisFavoritas: [], 
            hayPelisEnFavoritos: false,
        }
    }

    componentDidMount(){
        const storageFavoritos = localStorage.getItem('favoritos')
        if(storageFavoritos !== null){
            const favoritosParseado = JSON.parse(storageFavoritos)
            if(favoritosParseado.length > 0){
               
               //Como los fetch son acciones asincronas, necesito tener alguna forma de asegurarme en la que todas las promesas se resuelvan.
               //Una vez que se resuelvan, ahi si actualizar el estado --> para eso creamos Promise.all (no entra en el oral)
                Promise.all(
                   favoritosParseado.map((elm) => 
                    fetch('' + elm)
                   .then((response) => response.json())
                   .catch((err) => console.log(err))
                 ) 
              )
              //Este .then() se ejecuta una vez que el Promise.all() ocurra completamente
              //Este .then() es del Promise.all, el otro .then() es  del fetch
              .then((data) => this.setState({    
                pelisFavoritas: data,
                hayPelisEnFavoritos: true
             }))
              .catch((err) => console.log(err))

            }

        }

    }

    filtrarPeliculasFavoritos(id){
        const pelisFiltradas = this.state.pelisFavoritas.filter(elm => 
        elm.id !== id)
        this.setState({ pelisFavoritas: pelisFiltradas})
    }

    render(){
    return(
        <div>
            {
                this.state.pelisFavoritas.length > 0 ?
                this.state.pelisFavoritas.map((elm, idx) => 
                <MovieCard 
                  data={elm} 
                  key={idx + elm.title}
                  borrarDeFavoritos={(id) => this.filtrarPeliculasFavoritos(id)}
                />)
                :
                this.state.hayPelisEnFavoritos === false ?
                <h1>No hay peliculas favoritas</h1>
                :
                <h1>Cargando tus peliculas favoritas</h1>
            }
        
        </div>
     )
    }
}

export default Favoritos