import React, { Component } from 'react'
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import './App.css'

import { HomeView } from './views'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className='App-header'>
          <h1 className='App-title'>
            <Link to='/' className='logo-link'>Catstagram</Link>
          </h1>
        </header>
        <Switch>
          <Route path='/' exact component={HomeView} />
          <Redirect to='/' />
        </Switch>
      </div>
    );
  }
}

export default App
