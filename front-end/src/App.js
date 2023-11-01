import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Tvseries from "./components/Tv series/Tvseries";
import Documentaries from "./components/Documentaries/Documentaries";
import Categories from "./components/Categories/Categories";
import Movie from "./Movie";
import ScrollToTop from "./scroll";
import Subcription from "./Subcription";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Tvseries" element={<Tvseries />} />
            <Route path="/Documentaries" element={<Documentaries />} />
            <Route path="/Categories" element={<Categories />} />
            <Route path="/Movie" element={<Movie />} />
            <Route path="/Subcription" element={<Subcription />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
