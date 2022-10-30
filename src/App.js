// import logo from "./logo.svg";
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/NavBar"

import "./App.css";
import Home from "./Components/Home";
import OurServices from "./Components/OurServices";
import Features from "./Components/Features";
import Team from "./Components/Team";
import Blog from "./Components/Blog";
import Pricing from "./Components/Pricing";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return <div className="App">
    <NavBar />
    <Home />
    <OurServices />
    <Features />
    <Pricing />
    <Team />
    <Blog />
    <Contact />
    <Footer />
  </div>;
}

export default App;
