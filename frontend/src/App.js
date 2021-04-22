import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Search from './pages/Search';
import About from './pages/About';
import Informal from './pages/Informal';
import News from './pages/News';
import Institution from './pages/Institution';

function App() {
  return (
    <div className='App'>
      <Header>
        <Router>
          <Switch>{/* Links to other sub pages */}</Switch>
        </Router>
      </Header>
      <Home />
      <Institution />
      <Footer />
    </div>
  );
}

export default App;
