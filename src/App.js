import React from 'react';
import "./App.css";
import Home from './pages/Home';
import Summer2020 from './pages/Summer2020';
import AbousUs from './pages/AbousUs';
import Register from './pages/Register';
import Error from './pages/Error';
import LuxuryCruise from './pages/LuxuryCruise';
import WinterVacations from './pages/WinterVacations';

import {Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import SingleRoom from './pages/SingleRoom';
import SingleRoom1 from './pages/SingleRoom1';
import SingleRoom2 from './pages/SingleRoom2';


function App() {
  return (
    <>
    
<Navbar/>

<ScrollToTop/>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/luxurycruise/" component={LuxuryCruise} />
    <Route exact path="/wintervacations/" component={WinterVacations} />
    <Route exact path="/summer2020/" component={Summer2020} />
    <Route exact path="/summer2020/:slug" component={SingleRoom} />
    <Route exact path="/wintervacations/:slug" component={SingleRoom1} />
    <Route exact path="/luxurycruise/:slug" component={SingleRoom2} />
    
    
    <Route exact path="/abousus" component={AbousUs} />
    
    <Route exact path="/Register" component={Register} />
    
    <Route component={Error}/>
    </Switch>
   
    
    </>
  );
    
  
}

export default App;
