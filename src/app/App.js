import React from 'react';
import { Route, Switch } from 'react-router-dom';

import '../assets/css/App.css';

import HomeView from '../components/home';
import RecipeDetails from '../components/recipe-details';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="m-2">Food Recipe App</h1>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/recipe" component={RecipeDetails} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
