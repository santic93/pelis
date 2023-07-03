import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Layout from './components/Layout';
import MovieList from './components/MovieList/MovieList';
import UseContext from './context/UseContext';
import MovieDetails from './components/Details/MovieDetails';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <UseContext>
          <Layout>
            <Routes>
              <Route index path='' element={<Home />} />
              <Route path='/movie' element={<MovieList />} />
              <Route path='/movies/:imdbID' element={<MovieDetails />} />
            </Routes>
          </Layout>
        </UseContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
