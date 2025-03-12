import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import pattern from "./assets/background-pattern.svg";

function App() {
  return (
    <div className="font-poppins min-h-screen w-screen bg-black overflow-hidden">
      <div
        className="z-[0] absolute inset-0 bg-cover top-20 md:top-15 opacity-50"
        style={{ backgroundImage: `url(${pattern})` }}
      >
      </div>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
