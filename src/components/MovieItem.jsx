import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import handleImgError from '../utils/index';
import {
  Box,
  Typography,
  Link,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActionArea
} from '@material-ui/core';
import StarRate from '@material-ui/icons/StarRate';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  grid: {
    display: 'flex'
  },
  button: {
    margin: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  media: {
    height: 200
  },
  star: {
    color: 'orange'
  }
}));

const MovieItem = ({
  id,
  title,
  genres = [],
  releaseDate,
  voteAverage,
  genreIds = [],
  backdropPath,
  isLoading
}) => {
  const classes = useStyles();
  return (
    <Grid className={classes.grid} item md={4} lg={4} xl={4} xs={12} sm={6}>
      <Card className={classes.card}>
        <CardActionArea>
          <Link color="textPrimary" component={RouterLink} to={`/movies/${id}`}>
            <CardMedia
              component="img"
              alt={title}
              className={classes.media}
              onError={handleImgError}
              src={`https://image.tmdb.org/t/p/w500${backdropPath}`}
            />
          </Link>
        </CardActionArea>
        <CardContent>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="body1">{title}</Typography>
            <Typography variant="body2">{releaseDate.split('-')[0]}</Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            {genres &&
              genreIds
                .map(id => {
                  const genre = genres.find(genre => {
                    return genre.id === id;
                  }).name;
                  return genre.charAt(0).toUpperCase() + genre.slice(1);
                })
                .join(', ')}
            <Box display="flex">
              <StarRate className={classes.star} />
              {voteAverage}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default MovieItem;
