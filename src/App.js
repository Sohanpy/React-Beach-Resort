import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
// pages
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Singlerooms from './pages/SingleRoom';
import Eror from './pages/Error';

// components
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms" exact component={Rooms} />
        <Route path="/rooms/:slug" exact component={Singlerooms} />
        <Route component={Eror} />
      </Switch>
    </>
  );
}

export default App;
