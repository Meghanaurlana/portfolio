import { BrowserRouter } from "react-router-dom";
import About from "./components/About/About";
import Works from "./components/Works";
import Header from "./components/Header/Header";
import './index.css';
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";
import LeftNav from "./components/NavbarLeft/LeftNav";
function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <div>
          <Hero />
        </div>
        <div className="headerpage">
          <Header />
          <LeftNav />
        </div>
        <About />
        {/* <Works /> */}
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
