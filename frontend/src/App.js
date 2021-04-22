import './App.scss';
import React, { Fragment } from 'react';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Search from './pages/Search';
import About from './pages/About';
import Career from './pages/Career';
import Informal from './pages/Informal';
import NewPartner from './pages/NewPartner';
import News from './pages/News';
import Partners from './pages/Partners';
import Login from './components/Login';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Fragment>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/informal' component={Informal} />
            <Route exact path='/new-partner' component={NewPartner} />
            <Route exact path='/news' component={News} />
            <Route exact path='/partners' component={Partners} />
            <Route exact path='/search' component={Search} />
            <Route exact path='/career' component={Career} />
          </Switch>
        </Fragment>
      </Router>
      {/* <Home /> */}
      {/* <About />
      <Informal/>
      <Search /> */}
      <Footer />
    </div>
  );
}

export default App;
