import { useEffect } from "react";
import Nav from "./components/Nav";
import About from "./Pages.jsx/About";
import HomePage from "./Pages.jsx/HomePage";
import Projects from "./Pages.jsx/Projects";
import Aos from "aos";
import "aos/dist/aos.css";
import Tools from "./Pages.jsx/Tools";
import Contact from "./Pages.jsx/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);
  return (
    <>
      <Nav />
      <div className="max-w-6xl mx-auto w-full p-4 overflow-hidden">
        <HomePage />
        <Projects />
        <About />
        <Tools />
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
