import "./App.css";
import Header from "./Components/Header";
import About from "./Components/About";
import Roadmap from "./Components/Roadmap";
import Motivation from "./Components/Motivation";
import Thanks from "./Components/Thanks";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <div className="bg-cover bg-fixed bg-[url('./assets/Header/HeaderBG.jpg')] h-[100vh]">
        <div className="bg-black bg-opacity-30 ">
          <Header />
        </div>
      </div>
      <div id="about" className="bg-zinc-800 h-[110vh]">
        <About />
      </div>
      <div
        id="roadmap"
        className="bg-zinc-700 bg-cover bg-fixed h-[114vh] pt-6">
        <Roadmap />
      </div>
      <div
        id="motivation"
        className="bg-zinc-800 h-[110vh]  border-white border-b-4">
        <Motivation />
      </div>
      <div className="bg-[url('./assets/Contact/layer-base.png')] h-[100vh]  bg-fixed bg-cover">
        <Thanks />
      </div>
      <div
        id="contact"
        className="bg-zinc-800 lg:h-[80vh] h-[110vh] border-white border-t-4">
        <Contact />
      </div>
    </>
  );
}

export default App;
