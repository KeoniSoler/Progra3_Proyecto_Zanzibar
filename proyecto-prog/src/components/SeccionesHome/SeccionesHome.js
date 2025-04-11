import React, { Component } from "react";
import { Link } from "react-router-dom";
import GridMovie from "../GridMovie/GridMovie";
import './styles.css';

class SeccionesHome extends Component {
    constructor(props){
        super(props)
        this.state={
            populares: [],
            cartelera: [],
        }
    }
    componentDidMount(){
        //Para peliculas populares
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=fb93fcd4664bbfe64f105075e91d8d7c`)
        .then((response) => response.json())
        .then((data) => { 
            this.setState({
                populares: data.results.slice(0, 5), 
            })
        })
        .catch((error) => console.log(error))

        //Para peliculas populares
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=fb93fcd4664bbfe64f105075e91d8d7c`)
        .then((response) => response.json())
        .then((data) => { 
            this.setState({
                cartelera: data.results.slice(0, 5), 
            })
        })
        .catch((error) => console.log(error))
    }


    render(){
    return(
        <main>
            <h2 className="subtitulo"><Link to={"verpopulares"}>PELICULAS MAS POPULARES</Link></h2>
            <GridMovie peliculas={this.state.populares}/>
            <p className="linkvermas"><Link to={"verpopulares"}>Ver Todas</Link></p>
            <h2 className="subtitulo"><Link to={"vercartelera"}>PELICULAS EN CARTELERA</Link></h2>
            <GridMovie peliculas={this.state.cartelera}/>
            <p className="linkvermas"><Link to={"vercartelera"}>Ver Todas</Link></p>
        </main>
    )}
}

export default SeccionesHome
