import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

function App() {
  return (
    <div
      id="main"
      className="snap-y snap-mandatory h-screen overflow-y-scroll text-white overflow-x-hidden"
    >
      <section>
        <div className="h-screen snap-center">
          <Hero />
        </div>
      </section>
      <section>
        <div className="h-screen snap-center">
          <About />
        </div>
      </section>
      <section>
        <div className="h-screen snap-center">
          <Skills />
        </div>
      </section>
      <section>
        <div className="h-screen snap-center">
          <Experience />
        </div>
      </section>
    </div>
  );
}

export default App;
