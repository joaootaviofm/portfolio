import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import pattern from "./assets/background-pattern.svg";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen relative font-poppins bg-[#050505] overflow-x-hidden">
      {/* Dot-grid pattern */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(156, 131, 255, 0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(156, 131, 255, 0.045) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          zIndex: 0,
        }}
      />
      {/* Original SVG pattern — kept very subtle */}
      <div
        className="opacity-[0.06] fixed inset-0 bg-cover pointer-events-none"
        style={{ backgroundImage: `url(${pattern})`, zIndex: 0 }}
      />
      {/* Scanline sweep */}
      <div className="scanline-anim" />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
