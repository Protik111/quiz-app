import Home from "./components/Home/Home";
import './Styles/Global.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Selection from "./components/Selection/Selection";
import QuizPage from "./components/QuizPage/QuizPage";
import Results from "./components/Results/Results";
import NotFound from "./components/NotFound/NotFound";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/selection/:category/:apiVal" element={<Selection />} />
          <Route path="/quizPage/:category" element={<QuizPage />}></Route>
          <Route path="/result" element={<Results />}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
