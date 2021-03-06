import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem';
import Pagination from './Pagination';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(2)
  }
}));

const MovieList = ({ movies = [], genres = [], isLoading = true }) => {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="lg">
      {isLoading ? (
        <CircularProgress color="secondary" size={60} />
      ) : (
        <Grid container spacing={3}>
          {movies.items.map(movie => (
            <MovieItem
              key={movie.id}
              id={movie.id}
              title={movie.title}
              genres={genres}
              releaseDate={movie.release_date}
              voteAverage={movie.vote_average}
              backdropPath={movie.backdrop_path}
              genreIds={movie.genre_ids}
              isLoading={isLoading}
            />
          ))}
          <Pagination pageCount={movies.totalPages} currentPage={movies.page} />
        </Grid>
      )}
    </Container>
  );
};

MovieList.propTypes = {
  movies: PropTypes.object.isRequired,
  genres: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default MovieList;
