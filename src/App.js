import './App.css';
import Footer from './components/layout/footer/Footer';
import Header from './components/layout/header/Header';
// import Home from './components/layout/home/Home';
import RickAndMortyPage from './components/layout/rickAndMortyPage/RickAndMortyPage';

function App() {
  return (
    <div>
      <Header />
      {/* <Home /> */}
      <RickAndMortyPage />
      <Footer />
    </div>
  );
}

export default App;
