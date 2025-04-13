import React, {Component} from "react";
import DetalleCard from "../../components/DetalleCard/DetalleCard";

class Detalle extends Component{
   constructor(props){
       super(props)
       this.state = {
           data: null,
       }
   }
   componentDidMount(){
    const {id} = this.props.match.params;
       fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=fb93fcd4664bbfe64f105075e91d8d7c`)
       .then((response) => response.json())
       .then((data) => {
        this.setState({
             data: data,
            });
       })
       .catch((error) => console.log(error))
   }
   render(){
       return (
           <React.Fragment>
            <h2 className="subtitulo">DETALLE:</h2>
            {
                this.state.data && Object.keys(this.state.data).length !== 0 ?
                <DetalleCard data={this.state.data} />
                :
                <p>Cargando...</p>
            }
           </React.Fragment>
       )
   }
}

export default Detalle;

