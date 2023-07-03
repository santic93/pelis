import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Context from '../../context/Context';
import './ErrorReq.css';

export default function ErrorReq() {
  const { statusReq } = useContext(Context);
  const handleClick = () => {
    statusReq('True');
  };
  return (
    <>
      <div className='zoom-area'>
        <p>
          <b>No se encontraron resultados que coincidan con tu busqueda...</b>
        </p>
        <NavLink to='/' onClick={handleClick}>
          <button type='button' class='btn btn-success'>
            Volver
          </button>
        </NavLink>
      </div>
    </>
  );
}
