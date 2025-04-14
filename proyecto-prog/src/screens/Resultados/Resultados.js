import React, { Component } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";

class Resultados extends Component {
    constructor(props) {
        super(props)
        this.state = {
            busqueda: props.match.params.busqueda,
            resultados: []
        }
    }
    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.busqueda}&api_key=fb93fcd4664bbfe64f105075e91d8d7c`)
            .then((response) => response.json())
            .then(data => this.setState({ resultados: data.results }))
            .catch(error => console.log(error))
    }
    render() {
        return (
            <React.Fragment>
                <h2 className="subtitulo">RESULTADOS DE: {this.state.busqueda}</h2>
                <section className="sectionpopulares">
                    {
                        this.state.resultados.length > 0
                            ?
                            this.state.resultados.map(elm => (
                                <MovieCard data={elm} key={elm.id} />
                            ))
                            :
                            <h2 className="subtitulo">No se han encontrado resultados</h2>
                    }
                </section>
            </React.Fragment>
        )
    }
}
export default Resultados;