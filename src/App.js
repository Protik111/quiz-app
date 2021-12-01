import Home from "./components/Home/Home";
import './Styles/Global.scss';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Selection from "./components/Selection/Selection";
import QuizPage from "./components/QuizPage/QuizPage";
import { createContext, useState } from "react";

export const UserContext = createContext();


function App() {
  const [name, setName] = useState('');
  return (
    <div className="App">
      <UserContext.Provider value={[name, setName]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/selection/:category/:apiVal" element={<Selection />} />
            <Route path="/quizPage/:category" element={<QuizPage />}></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
