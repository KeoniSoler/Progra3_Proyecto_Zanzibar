import React, { Component } from "react";
import Buscador from "../../components/Buscador/Buscador";

class Resultados extends Component{
    constructor(props){
        super(props)
        this.state = {
            busqueda: props.match.params.busqueda,
            resultados: []
        }
    }
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.busqueda}&api_key=<fb93fcd4664bbfe64f105075e91d8d7c>`)
        .then((response) => response.json())
        .then(data => this.setState({resultados: data.results}))
        .catch(error => console.log(error))
    }
    render(){
        return (
            <React.Fragment>
            <h4>Resultados: {this.state.busqueda}</h4>
            <section>
                {this.state.resultados.map(elm => <h1>{elm.original_title}</h1>)}
            </section>
            </React.Fragment>
        )
    }
}

export default Resultados;