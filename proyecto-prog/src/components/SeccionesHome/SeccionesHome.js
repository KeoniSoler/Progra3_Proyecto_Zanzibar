import React, { Component } from "react";
import { Link } from "react-router-dom";
import GridMovie from "../GridMovie/GridMovie";
import './styles.css';

class SeccionesHome extends Component {
    constructor(props) {
        super(props)
        this.state = { //Hacemos los arrays vacios, para despues almacenar las peliculas en populares y en cartelera.
            populares: [],
            cartelera: [],
        }
    }
    componentDidMount() {
        //Traemos la informacion de peliculas populares de la API. La query es la apiKey
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=fb93fcd4664bbfe64f105075e91d8d7c`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    populares: data.results.slice(0, 5), //Para que muestre en la home solo 5 peliculas
                })
            })
            .catch((error) => console.log(error))

        //Traemos la informacion de peliculas cartelera de la API 
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=fb93fcd4664bbfe64f105075e91d8d7c`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    cartelera: data.results.slice(0, 5), //Para que muestre en la home solo 5 peliculas
                })
            })
            .catch((error) => console.log(error))
    }


    render() {
        return (
            <main>
                <h2 className="subtitulo"><Link to={"verpopulares"}>PELICULAS MAS POPULARES</Link></h2>
                <GridMovie peliculas={this.state.populares} />
                <Link to={"verpopulares"}><p className="linkvermas">Ver Todas</p></Link>
                <h2 className="subtitulo"><Link to={"vercartelera"}>PELICULAS EN CARTELERA</Link></h2>
                <GridMovie peliculas={this.state.cartelera} />
                <Link to={"vercartelera"}><p className="linkvermas">Ver Todas</p></Link>
            </main>
        )
    }
}

export default SeccionesHome
