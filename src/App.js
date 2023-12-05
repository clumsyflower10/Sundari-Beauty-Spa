import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Services from "./components/Services";
import Slides from "./components/Slides";
import Footer from "./components/Footer";
import Team from "./components/Team";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Services />
      <Slides />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
