import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './Descripcion.css';
import Context from '../../context/Context';
const MovieDetails = () => {
  const { imdbID } = useParams();
  const { fetchMovieDetails, movieDetail } = useContext(Context);
  useEffect(() => {
    fetchMovieDetails(imdbID);
  }, [imdbID]);

  if (!movieDetail) {
    return <div>Cargando...</div>;
  }
  return (
    <div className='descripcion'>
      <img src={movieDetail.Poster} alt='' />
      <h2>Titulo: {movieDetail.Title}</h2>
      <p>Actores: {movieDetail.Actors}</p>
      <span>Año: {movieDetail.Year}</span>
      <span>Duracion: {movieDetail.Runtime}</span>
    </div>
  );
};

export default MovieDetails;
