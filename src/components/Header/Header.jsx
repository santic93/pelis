import { NavLink } from 'react-router-dom';
import Search from '../Search/Search';
import './Header.css';
import { useContext } from 'react';
import Context from '../../context/Context';
export default function Header() {
  const { search } = useContext(Context);
  return (
    <div>
      <nav className='shadow p-3 mb-5 bg-body '>
        <NavLink
          to=''
          style={{ textDecoration: 'none' }}
          onClick={() => search('')}
        >
          <h1>Películas Para Tod@s</h1>
        </NavLink>
        <Search />
      </nav>
    </div>
  );
}
