import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import News from './pages/News'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    //BrowserRouter doit englober tte l'appli. Il va s'occuper de tout router.
    //Routes va tester toutes les routes. Si jamais aucunes routes n'est bonnes, il emmène vers la page 404.
    //On indique à Route que la racine correspondant à chq component
    // * pour la page 404
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/news' element={<News />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;