import { useEffect, useState } from 'react';
import { useContext } from 'react';
import Context from '../../context/Context';

import './Home.css';
import { Link } from 'react-router-dom';
export default function Home() {
  const { moviesInitial, listMovies, statusRequired } = useContext(Context);
  const [showHome, setShowHome] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowHome(true);
    }, 3000);
    listMovies();
  }, []);

  return (
    <div className='row'>
      {moviesInitial?.map((movie) => (
        <div className='container' key={movie.imdbID}>
          <Link
            to={`/movies/${movie.imdbID}`}
            style={{ textDecoration: 'none' }}
          >
            <div className='card'>
              <img
                src={movie.Poster}
                className={` ${movie.Poster === 'N/A' ? 'rotated' : ''}`}
              />
              <div className='no-underline'>
                <h5 className='no-underline'>Titulo: {movie.Title}</h5>
                <p className='no-underline'>Año: {movie.Year}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
