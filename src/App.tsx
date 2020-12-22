import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';
import Homepage from './pages/Home';
import DrinkInfo from './pages/DrinkInfo';
import CategoriesListPage from './pages/FilterCategoriesPage';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/cocktail/:id" component={DrinkInfo} />
      <Route exact path="/search/categories" component={CategoriesListPage} />
    </BrowserRouter>
  );
}
export default App;
