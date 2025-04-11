import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './styles.css';

class GridMovie extends Component {
    render() {
        return (
            <article className="articleHome">
                {this.props.peliculas.map((peli, idx) => (
                    <MovieCard data={peli} key={idx + peli.title} />
                ))}
            </article>
        )
    }
}

export default GridMovie;