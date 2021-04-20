import './App.scss';
import './scss/bootstrap/bootstrap.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
