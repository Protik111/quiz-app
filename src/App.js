import Home from "./components/Home/Home";
import './Styles/Global.scss';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Selection from "./components/Selection/Selection";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/selection" element={<Selection/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
