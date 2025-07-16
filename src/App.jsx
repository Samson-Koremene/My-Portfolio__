import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import "./index.css";
import NavBar from "./components/NavBar";
function App() {
  const [loaded, setLoaded] = useState(true);
  const [isOpen, setisOpen] = useState(false);

  return (
    <>
      {loaded && <LoadingScreen onComplete={() => setLoaded(false)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          loaded ? "opacity-0" : "opacity-100"
        } bg-black text-gray-100`}
      >
        <NavBar menuOpen={isOpen} setOpen={setisOpen} />
      </div>
    </>
  );
}

export default App;
