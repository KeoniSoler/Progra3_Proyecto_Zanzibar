import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './styles.css';

class GridMovie extends Component {
    render() {
        return (
            <section className="sectionpopulares">
                {this.props.peliculas.map((peli, idx) => (
                    <MovieCard data={peli} key={idx + peli.title} />
                ))}
            </section>
        )
    }
}

export default GridMovie;