import React from 'react';
import './App.css';

import Header from './components/header/header';
import { Redirect, Route, Switch } from 'react-router-dom';
import ProjectPage from './pages/project';
import HomePage from './pages/home';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Header brand='Kreez Winston'></Header>

        <main className='main'>
          <Switch>
            <Route path='/project/:id' component={ProjectPage} />
            <Route exact path='/' component={HomePage} />
            <Redirect to='/' />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
