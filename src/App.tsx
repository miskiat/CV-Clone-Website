import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Index";
import About from "./pages/About/Index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<About />} />
    </Routes>
  );
}

export default App;
