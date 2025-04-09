import React, {Component} from 'react';
import MovieCard from '../MovieCard/MovieCard';
import {Link} from 'react-router-dom';
import './styles.css';

class GridMovie extends Component {
render(){
    return(
        <article className="articleHome">
            <MovieCard />
        </article>
    )
}
}

export default GridMovie;