import "./App.css";

// Package
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./app/pages/home/Home";
import MyApp from "./app/MyApp";

function App() {
  return (
    <>
      <div className="scroll-control">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portofolio" element={<MyApp />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
