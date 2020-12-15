import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Homepage from './pages/Home';
import DrinkInfo from './pages/DrinkInfo';

function App() {

  return (
    <BrowserRouter>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/cocktail/:id" component={DrinkInfo} />
    </BrowserRouter>
  );

}
export default App;