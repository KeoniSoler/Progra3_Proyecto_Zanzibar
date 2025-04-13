import React, {Component} from "react";
import GridMovie from "../../components/GridMovie/GridMovie";
import Filter from "../../components/Filter/Filter";
import {Link} from 'react-router-dom';



class VerPopulares extends Component{
    constructor(props){
        super(props)
        this.state = {
            peliculas: [],
            backupPeliculas: [],
            paginaActual: 0,
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=fb93fcd4664bbfe64f105075e91d8d7c`)
        .then((response) => response.json())
        .then((data) => { 
            console.log("Datos:", data); 
            this.setState({
                peliculas: data.results, 
                backupPeliculas: data.results,
                paginaActual: 1,
            })
        })
        .catch((error) => console.log(error))
    }
    // Funcion para filtrar peliculas por nombre. Es diferente al buscador.
    filtrarPeliculas(busquedaPeli){
        if(busquedaPeli === ""){
            this.setState({peliculas: this.state.backupPeliculas});
        }else{
            fetch(`https://api.themoviedb.org/3/search/movie?query=${busquedaPeli}&api_key=fb93fcd4664bbfe64f105075e91d8d7c`)
                .then(response => response.json())
                .then(data => this.setState({peliculas: data.results}))
                .catch(error => console.log(error));
        }
    }
    // Boton en el cual se cargan mas peliculas de las que habia en un principio
    cargarMas(){
        fetch(`https://api.themoviedb.org/3/movie/popular?page=${this.state.paginaActual + 1}&api_key=fb93fcd4664bbfe64f105075e91d8d7c`)
        .then((response) => response.json())
        .then((data) => 
            this.setState({
                peliculas: this.state.backupPeliculas.concat(data.results), 
                backupPeliculas: this.state.backupPeliculas.concat(data.results),
                paginaActual: this.state.paginaActual + 1,
            }))
        .catch((error) => console.log(error))
    }

    render(){
        return(
            <React.Fragment>
            <Filter filtro={(busqueda) => this.filtrarPeliculas(busqueda)}/>
            <h2 className="subtitulo"><Link to={"verpopulares"}>PELICULAS MAS POPULARES</Link></h2>
                {
                    this.state.peliculas.length === 0 ?
                    <p>Cargando</p>
                   :
                
                    <GridMovie peliculas={this.state.peliculas}/>
                    
                }
            <button className="cargarmas" onClick={() => this.cargarMas()}>
                Cargar Mas
            </button>
            </React.Fragment>
        )
    }
}

export default VerPopulares;