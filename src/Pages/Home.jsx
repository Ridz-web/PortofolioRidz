import "../App.css";
import Header from "../Components/Header";
import About from "../Components/About";
import Roadmap from "../Components/Roadmap";
import Motivation from "../Components/Motivation";
import Thanks from "../Components/Thanks";
import Contact from "../Components/Contact";

function Home() {
  return (
    <>
      <div className=" h-[100vh] lg:bg-fixed bg-cover bg-[url('./assets/Header/BackgroundHeader.jpg')]">
        <div className="bg-black bg-opacity-30 z-10 relative h-full">
          <Header />
        </div>
      </div>
      <div id="about" className="bg-zinc-800 app relative h-[110vh]">
        <About />
      </div>
      <div
        id="roadmap"
        className="bg-zinc-700 bg-cover app z-40 relative bg-fixed h-[114vh] pt-6">
        <Roadmap />
      </div>
      <div
        id="motivation"
        className="bg-zinc-800 h-[110vh] app relative border-white border-b-4">
        <Motivation />
      </div>
      <div className=" app relative bg-[url('./assets/Contact/layer-base.png')] h-[100vh] lg:bg-fixed bg-cover">
        <Thanks />
      </div>
      <div
        id="contact"
        className="app bg-zinc-800 relative lg:h-[80vh] h-[110vh] border-white border-t-4">
        <Contact />
      </div>
    </>
  );
}

export default Home;
