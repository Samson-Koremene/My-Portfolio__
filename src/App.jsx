import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import AnimatedBackground from "./components/AnimatedBackground";
import GridBackground from "./components/GridBackground";
import ScrollProgress from "./components/ScrollProgress";
import "./index.css";
import NavBar from "./components/NavBar";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Project from "./components/sections/Project";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

function App() {
  const [loaded, setLoaded] = useState(true);
  const [isOpen, setisOpen] = useState(false);

  return (
    <>
      {loaded && <LoadingScreen onComplete={() => setLoaded(false)} />}
      <ScrollProgress />
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          loaded ? "opacity-0" : "opacity-100"
        } bg-black text-gray-100 relative overflow-hidden`}
      >
        <GridBackground />
        <AnimatedBackground />
        <div className="relative z-10">
          <NavBar menuOpen={isOpen} setOpen={setisOpen} />
          <Home load={loaded} />
          <About />
          <Project />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
