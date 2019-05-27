const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${type}_${base}`;
    return acc;
  }, {});
}

export const MOVIES = createRequestTypes('MOVIES');
export const TOP_MOVIES = createRequestTypes('TOP_MOVIES');
export const MOVIE_DETAIL = createRequestTypes('MOVIE_DETAIL');
export const GENRES = createRequestTypes('GENRES');

function action(type, payload = {}) {
  return { type, ...payload };
}

export const topMovies = {
  request: () => action(TOP_MOVIES[REQUEST]),
  success: movies => action(TOP_MOVIES[SUCCESS], movies),
  failure: error => action(TOP_MOVIES[FAILURE], error)
};

export const movies = {
  request: () => action(MOVIES[REQUEST]),
  success: movies => action(MOVIES[SUCCESS], movies),
  failure: error => action(MOVIES[FAILURE], error)
};

export const movieDetail = {
  request: id => action(MOVIE_DETAIL[REQUEST], { id }),
  success: details => action(MOVIE_DETAIL[SUCCESS], { movie: details }),
  failure: error => action(MOVIE_DETAIL[FAILURE], error)
};

export const genres = {
  request: () => action(GENRES[REQUEST]),
  success: genres => action(GENRES[SUCCESS], genres),
  failure: error => action(GENRES[FAILURE], error)
};

export const LOAD_MOVIE_PAGE = 'LOAD_MOVIE_PAGE';
export const loadMoviePage = id => action(LOAD_MOVIE_PAGE, id);

export const CHANGE_PAGE_NUMBER = 'CHANGE_PAGE_NUMBER';
export const changePageNumber = page => action(CHANGE_PAGE_NUMBER, page);
