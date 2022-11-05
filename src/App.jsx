import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./Contact";
import Home from "./Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
