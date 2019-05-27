import { combineReducers } from 'redux';

const initialState = {
  isLoading: true,
  items: [],
  error: false
};

const search = (state = '', action) => {
  switch (action.type) {
    case 'INPUT_SEARCH_CHANGED':
      return action.query;
    default:
      return state;
  }
};

const topMovies = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_TOP_MOVIES':
      return { ...state, isLoading: true };
    case 'SUCCESS_TOP_MOVIES':
      return {
        ...state,
        isLoading: false,
        items: action.results,
        currentPage: action.page,
        totalPages: action.total_pages,
        totalMovies: action.total_results
      };
    case 'FAILURE_TOP_MOVIES':
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};

const movieDetail = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_MOVIE_DETAIL':
      return { ...state, isLoading: true };
    case 'SUCCESS_MOVIE_DETAIL':
      return { isLoading: false, ...action.movie };
    case 'FAILURE_MOVIE_DETAIL':
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};

const genres = (state = { isLoading: true, error: false }, action) => {
  switch (action.type) {
    case 'REQUEST_GENRES':
      return { ...state, isLoading: true };
    case 'SUCCESS_GENRES':
      return { isLoading: false, items: action.genres };
    case 'FAILURE_GENRES':
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_MOVIES':
      return { ...state, isLoading: true };
    case 'SUCCESS_MOVIES':
    case 'SUCCESS_MOVIES_BY_QUERY':
      return {
        ...state,
        isLoading: false,
        items: action.results,
        currentPage: action.page,
        totalPages: action.total_pages,
        totalMovies: action.total_results
      };
    case 'FAILURE_MOVIES':
    case 'FAILURE_MOVIES_BY_QUERY':
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  genres,
  topMovies,
  movies,
  movieDetail,
  search
});
export default rootReducer;
