import React, {Component} from "react";
import GridMovie from "../../components/GridMovie/GridMovie";
import Filter from "../../components/Filter/Filter";
import {Link} from 'react-router-dom';
import MovieCard from "../../components/MovieCard/MovieCard";



class VerPopulares extends Component{
    constructor(props){
        super(props)
        this.state = {
            peliculas: [],
            backupPeliculas: [],
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/person/popular&api_key=<fb93fcd4664bbfe64f105075e91d8d7c>')
        .then((response) => response.json())
        .then((data) => { 
           
            this.setState({
                peliculas: data.results, 
                backupPeliculas: data.results
            })
        })
        .catch((error) => console.log(error))
    }

    filtrarPeliculas(busquedaPeli){
        const peliculasFiltradas = this.state.backupPeliculas.filter((elm) => elm.name.toLowerCase().includes(busquedaPeli.toLowerCase()))
        this.setState({peliculas: peliculasFiltradas})
    }

    render(){
        return(
            <React.Fragment>
            <Filter filtro={(busqueda) => this.filtrarPeliculas(busqueda)}/>
                {
                    this.state.peliculas.length === 0 ?
                    <section className="sectionpopulares">
                    <GridMovie />
                    </section>
                   :
                   this.state.peliculas.map((elm, idx) =>  <MovieCard datos={elm} key={idx + elm.title} />)
                }

            <h2 className="subtitulo"><Link to={"verpopulares"}>PELICULAS MAS POPULARES</Link></h2>
           
            <button>
                Cargar Mas
            </button>
            </React.Fragment>
        )
    }
}

export default VerPopulares;