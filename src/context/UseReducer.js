const INITIAL_MOVIES = 'INITIAL_MOVIES';
const STATUS_REQ = 'STATUS_REQ';
const SEARCH_MOVIE = 'SEARCH_MOVIE';
const SEARCH_INPUT = 'SEARCH_INPUT';
const MOVIE_DETAIL = 'MOVIE_DETAIL';

export default function UseReducer(state, action) {
  const { payload, type } = action;
  switch (type) {
    case INITIAL_MOVIES:
      return { ...state, moviesInitial: payload };
    case STATUS_REQ:
      return { ...state, statusRequired: payload };
    case SEARCH_MOVIE:
      return { ...state, moviesSearch: payload };
    case SEARCH_INPUT:
      return { ...state, searchInput: payload };
    case MOVIE_DETAIL:
      return { ...state, movieDetail: payload };
  }
}
