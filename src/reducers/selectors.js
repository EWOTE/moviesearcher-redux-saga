// export const selectSearchInput = state => state.search;
// export const currentMovieID = state => state.movieDetail.id;

//selectors для react-select
export const getValue = state => {
  return { value: state.search, label: state.search };
};

export const getOptions = state => {
  return state.movies.items.map(movie => {
    return {
      value: movie.id,
      label: movie.title
    };
  });
};

export const isLoading = state => {
  return state.movies.isLoading;
};
