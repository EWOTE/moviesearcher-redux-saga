import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import HeaderContainer from './containers/HeaderContainer';
import MovieDetailContainer from './containers/MovieDetailContainer';
import MovieListContainer from './containers/MovieListContainer';

export default function() {
  return (
    <Router>
      <HeaderContainer title="Movie Searcher" />
      <Route exact path="/" component={MovieListContainer} />
      <Route path="/movies/:id" component={MovieDetailContainer} />
    </Router>
  );
}
