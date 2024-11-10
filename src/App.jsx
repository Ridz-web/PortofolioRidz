import "./App.css";
import Home from "./Pages/Home";
import Faq from "./Pages/Faq";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router basename="/PortofolioRidz">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
