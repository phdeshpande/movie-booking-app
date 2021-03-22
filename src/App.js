import './App.css';
import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import SignUp from '../src/components/SignUp';
import SignIn from '../src/components/SignIn';
import Header from "../src/components/shared/header";
import MoviesList from './components/Movies/List';


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Header />
      </header>
      <Router>
        <div>
          <Switch>
            <Route exact path='/'>
              <SignUp />
            </Route>
            <Route path='/signin'>
              <SignIn />
            </Route>
            <Route path='/movies'>
              <MoviesList />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
