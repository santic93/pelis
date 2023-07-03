import Context from './Context';
import axios from 'axios';
import { useReducer } from 'react';
import UseReducer from './UseReducer';
const { REACT_APP_API_KEY: API_KEY } = process.env;
const { REACT_APP_API_ENDPOINT: ENDPOINT } = process.env;

export default function UseContext({ children }) {
  const initialState = {
    moviesInitial: [],
    moviesSearch: [],
    statusRequired: '',
    searchInput: '',
    movieDetail: null,
  };
  const [state, dispatch] = useReducer(UseReducer, initialState);
  const listMovies = async () => {
    const res = await axios.get(`${ENDPOINT}${API_KEY}&s=esperando`);
    dispatch({ type: 'INITIAL_MOVIES', payload: res.data.Search });
  };
  const searchMov = async (searchMov) => {
    const res = await axios.get(`${ENDPOINT}${API_KEY}&s=${searchMov}`);
    dispatch({ type: 'SEARCH_MOVIE', payload: res.data.Search });
  };

  const statusReq = async (searchMov) => {
    const res = await axios.post(`${ENDPOINT}${API_KEY}&s=${searchMov}`);
    dispatch({ type: 'STATUS_REQ', payload: res.data.Response });
  };
  const search = (searchInput) => {
    dispatch({ type: 'SEARCH_INPUT', payload: searchInput });
  };
  const fetchMovieDetails = async (imdbID) => {
    const res = await axios.get(`${ENDPOINT}${API_KEY}&i=${imdbID}`);
    dispatch({ type: 'MOVIE_DETAIL', payload: res.data });
  };
  return (
    <Context.Provider
      value={{
        moviesInitial: state.moviesInitial,
        statusRequired: state.statusRequired,
        moviesSearch: state.moviesSearch,
        searchInput: state.searchInput,
        movieDetail: state.movieDetail,
        listMovies,
        statusReq,
        searchMov,
        search,
        fetchMovieDetails,
      }}
    >
      {children}
    </Context.Provider>
  );
}
