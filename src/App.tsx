import React from 'react';
import InitialPage from './pages/initial-page/initialPage';
import MovieDetailsPage from './pages/movie-details/movieDetails';
import { GlobalStyles } from './styles/GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<InitialPage />} />
          <Route path='/movie' element={<MovieDetailsPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
