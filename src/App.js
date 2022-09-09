import "./App.css";

// Modules
import { Routes, Route } from "react-router-dom";

// pages
import Home from "./app/pages/home/Home";
import MyApp from "./app/MyApp";

function App() {
  return (
    <>
      <div className="scroll-control">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portofolio" element={<MyApp />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
