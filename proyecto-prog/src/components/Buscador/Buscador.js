import React, {Component} from "react";

class Buscador extends Component {
    constructor(props){
        super(props)
        this.state = {
            input: "",
        }
    }
    controlarForm(evento){
        evento.preventDefault();
        this.props.history.push('busqueda/' + this.state.input)
    }
    controlarInput(evento){
        this.setState({input: evento.target.value})
    }
    render(){
        return(
            <form onSubmit={(evento) => this.controlarForm(evento)}>
                <input placeholder='buscador' value={this.state.input} onChange={(evento) => this.controlarInput(evento)}/>
                <button type='submit'>Buscar</button>
            </form>
        )
    }
}
export default Buscador;