import './App.scss';
import './scss/bootstrap/bootstrap.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Search from './pages/Search';
import About from './pages/About';
import Informal from './pages/Informal';
import News from './pages/News';

function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
      <About />
      <Search />
      <Informal />
      <News />
      <Footer />
    </div>
  );
}

export default App;
