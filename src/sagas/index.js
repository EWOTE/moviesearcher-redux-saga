import {
  call,
  put,
  cancel,
  take,
  all,
  fork,
  delay,
  takeLatest
} from 'redux-saga/effects';
import * as actions from '../actions/index';
import * as API from '../services/api';

const { genres, movies, movieDetail, topMovies } = actions;

function* fetchEntity(entity, apiFn, id) {
  try {
    yield put(entity.request(id));
    const { data: response } = yield call(apiFn, id);
    yield put(entity.success(response));
  } catch (error) {
    yield put(entity.failure(error));
  }
}

const fetchGenres = fetchEntity.bind(null, genres, API.fetchGenres);
const fetchTopMovies = fetchEntity.bind(null, topMovies, API.fetchTopMovies);
const fetchMoviesByQuery = fetchEntity.bind(
  null,
  movies,
  API.fetchMoviesByQuery
);
const fetchMovieDetail = fetchEntity.bind(
  null,
  movieDetail,
  API.fetchMovieDetail
);

function* initialState() {
  yield fork(fetchGenres);
  yield fork(fetchTopMovies);
}

function* handleSearchInput({ query }) {
  if (query.length === 0) yield cancel();
  yield delay(550);
  yield fork(fetchMoviesByQuery, query);
}

function* watchLoadMoviePage() {
  while (true) {
    const { id } = yield take(actions.LOAD_MOVIE_PAGE);
    yield fork(fetchMovieDetail, id);
  }
}

function* watchSearchInput() {
  yield takeLatest('INPUT_SEARCH_CHANGED', handleSearchInput);
}

function* watchPaginate() {
  while (true) {
    const { page } = yield take('CHANGE_PAGE_NUMBER');
    yield fork(fetchTopMovies, page);
  }
}
export default function* rootSaga() {
  yield all([
    // получаем жанры & топ фильмов
    fork(initialState),
    // на каждый триггер экшена LOAD_MOVIVIE_PAGE грузим страницу фильма
    fork(watchLoadMoviePage),
    // обрабатываем строку поиска и фетчим фильмы на каждый последний экшен
    fork(watchSearchInput),
    // пагинация
    fork(watchPaginate)
  ]);
}
