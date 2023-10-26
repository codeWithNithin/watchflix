import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';

createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/categories',
        element: <Categories />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
