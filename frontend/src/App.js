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
import Partners from './pages/Partners';
import NewPartner from './pages/NewPartner';
import ApiDocs from './pages/ApiDocs';

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
      <NewPartner />
      <Footer />
      <ApiDocs />
    </div>
  );
}

export default App;
