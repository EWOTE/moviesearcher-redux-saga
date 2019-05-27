import React from 'react';
import handleImgError from '../utils/index';

import Container from '@material-ui/core/Container';
import { CardContent, Typography, Box, Link } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { StarRate, AvTimer } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2)
  }
}));

const MovieDetail = ({
  isLoading = true,
  title = '',
  poster_path = '',
  release_date = '',
  runtime = 0,
  overview = '',
  vote_average = 0,
  tagline = '',
  homepage = '',
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
          <Box display="flex">
            <CardContent
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                justifyContent: 'space-between'
              }}
            >
              <Typography variant="h2">{title}</Typography>
              <Typography
                style={{ display: 'flex', alignItems: 'center' }}
                variant="h6"
              >
                <StarRate style={{ color: 'orange' }} />
                Рейтинг фильма: {vote_average ? vote_average : 'неизвестно'}
              </Typography>
              {tagline && (
                <Typography variant="h6">Слоган: {tagline}</Typography>
              )}
              <Typography variant="h6">
                Год: {release_date.split('-')[0]}
              </Typography>
              <Typography
                style={{ display: 'flex', alignItems: 'center' }}
                variant="h6"
              >
                <AvTimer style={{ color: 'orange' }} />
                Длительность: {runtime ? runtime : 'неизвестно'} мин.
              </Typography>
              <Typography variant="h6">
                Жанры: {genres.map(genre => genre.name).join(', ')}
              </Typography>
              <Typography variant="h6">Описание: {overview}</Typography>
              {homepage && (
                <Typography variant="h6">
                  Домашняя страница: <Link href={homepage}>{homepage}</Link>
                </Typography>
              )}
            </CardContent>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default MovieDetail;
