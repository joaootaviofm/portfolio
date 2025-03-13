import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
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
    </div>
  );
}

export default App;
