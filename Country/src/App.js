import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Navbar } from "./components/Navbar";
import { Citi } from "./components/Citi";
import { Country } from "./components/Country";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/citi" element={<Citi />}></Route>
        <Route path="/country" element={<Country />}></Route>
      </Routes>
    </div>
  );
}

export default App;
