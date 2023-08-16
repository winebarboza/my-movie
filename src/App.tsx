import React from 'react';
import InitialPage from './pages/initialPage';
import { GlobalStyles } from './styles/GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<InitialPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
