import React from 'react';
import { connect } from 'react-redux';
import MovieList from '../components/MovieList';

const mapStateToProps = ({ topMovies, genres }) => {
  return {
    movies: topMovies,
    isLoading: topMovies.isLoading,
    genres: genres.items
  };
};

const MovieListContainer = ({ movies = [], genres = [], isLoading = true }) => (
  <MovieList movies={movies} isLoading={isLoading} genres={genres} />
);

export default connect(mapStateToProps)(MovieListContainer);
