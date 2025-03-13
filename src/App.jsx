import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import pattern from "./assets/background-pattern.svg";

function App() {
  return (
    <div className=" min-h-screen relative font-poppins bg-black overflow-x-hidden">
      <div
        className="opacity-40 absolute inset-0 bg-cover"
        style={{ backgroundImage: `url(${pattern})` }}
      >
      </div>
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      
    </div>
  );
}

export default App;
