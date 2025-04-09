import React, {Component} from "react";

class Detalle extends Component{
   constructor(props){
       super(props)
       this.state = {
           peliculas: [],
           backupPeliculas: [],
       }
   }
   componentDidMount(){
       fetch(`https://api.themoviedb.org/3/person/popular/${id}&api_key=<fb93fcd4664bbfe64f105075e91d8d7c>`)
       .then((response) => response.json())
       .then((data) => {
           this.setState({
               peliculas: data.results,
               backupPeliculas: data.results
           })
       })
       .catch((error) => console.log(error))
   }
   render(){
       return (
           <React.Fragment>
               <h1>Detalle</h1>
           </React.Fragment>
       )
   }
}

export default Detalle;

