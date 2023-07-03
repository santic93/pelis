import { useContext, useEffect } from 'react';
import Context from '../../context/Context';
import ErrorReq from '../ErrorReq/ErrorReq';
import './MovieList.css';
import { Link } from 'react-router-dom';
export default function MovieList() {
  const { moviesSearch, statusRequired } = useContext(Context);
  const { search } = useContext(Context);
  useEffect(() => {
    search('');
  }, []);

  return (
    <div className='m-3 row row-cols-1 row-cols-md-4 g-4'>
      {statusRequired === 'False' ? (
        <>
          <ErrorReq />
        </>
      ) : (
        <>
          {' '}
          {moviesSearch?.map((movie) => (
            <div className='text-center col prueba ' key={movie.imdbID}>
              <Link
                to={`/movies/${movie.imdbID}`}
                style={{ textDecoration: 'none' }}
              >
                <div className='card h-100 shadow p-3 mb-5 bg-body rounded'>
                  <img
                    src={movie.Poster}
                    className='img-thumbnail '
                    alt='imagen pelicula'
                  />
                  <div className='card-body'>
                    <h5 className='card-title'>Titulo: {movie.Title}</h5>
                    <p className='card-text'>Año: {movie.Year}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
