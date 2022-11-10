import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/layout/footer/Footer';
import Header from './components/layout/header/Header';
import Counter from './components/counter/Counter';
import Home from './components/layout/home/Home';
import RickAndMortyPage from './components/layout/rickAndMortyPage/RickAndMortyPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='*' element={<>404</>}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/counter' element={<Counter />}/>
          <Route path='/rick' element={<RickAndMortyPage />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );

  // const [currentRoute, setCurrentRoute] = useState('');

  // useEffect(() => {
  //   setCurrentRoute(window.location?.pathname);
  // }, []);

  // const toggleCurrentPage = () => {
  //   switch (currentRoute) {
  //     case '/rick':
  //       return <RickAndMortyPage />;
  //     case '/counter':
  //       return <Counter />;
  //     case '/home':
  //       return <Home />;
  //     default:
  //       return <h1>404</h1>
  //   }
  // };

  // return (
  //   <div>
  //     <Header />
  //     { toggleCurrentPage() }
  //     <Footer />
  //   </div>
  // );
}

export default App;
