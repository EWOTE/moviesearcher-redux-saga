import React from 'react';
import fallbackImg from '../static/fallback.jpg';
import Container from '@material-ui/core/Container';
import { CardContent, Typography, Box } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import StarRate from '@material-ui/icons/StarRate';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2)
  }
}));

const handleImgError = e => {
  e.target.src = fallbackImg;
};

const MovieDetail = ({
  isLoading = true,
  title = '',
  poster_path = '',
  release_date = '',
  runtime = 0,
  overview = '',
  vote_average = 0,
  genres = []
}) => {
  const classes = useStyles();
  return (
    <Container className={classes.root} fixed>
      {isLoading ? (
        <CircularProgress color="secondary" size={60} />
      ) : (
        <Box display="flex">
          <img
            alt="poster"
            onError={handleImgError}
            style={{ width: '500px', objectFit: 'contain' }}
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          />

          <Box display="flex" flexDirection="column">
            <CardContent>
              <Typography variant="h2">{title}</Typography>
              <Typography
                style={{ display: 'flex', alignItems: 'center' }}
                variant="h6"
              >
                <StarRate style={{ color: 'orange' }} />
                Рейтинг фильма: {vote_average ? vote_average : 'неизвестно'}
              </Typography>
              <Typography variant="h6">
                Год: {release_date.split('-')[0]}
              </Typography>
              <Typography variant="h6">
                Длительность: {runtime ? runtime : 'неизвестно'} мин.
              </Typography>
              <Typography variant="h6">
                Жанры: {genres.map(genre => genre.name).join(', ')}
              </Typography>
              <Typography variant="h6">Описание: {overview}</Typography>
            </CardContent>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default MovieDetail;
