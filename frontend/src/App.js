import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Search from './pages/Search';
import About from './pages/About';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      {/* <About /> */}
      {/* <Search /> */}
      <Footer />
    </div>
  );
}

export default App;
