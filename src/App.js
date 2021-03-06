import { useState } from "react";
import { BrowserRouter as Router, Routes, 
  Route} from "react-router-dom";
import { Game } from "./components/Game/Game";
import { Home } from "./components/Home";
import { Result } from "./components/Result/Result";

function App() {
  const [sudokuResult, setsudokuResult] = useState([])
  return (
    <>
      <Router basename={window.location.pathname || ''}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:grid/:diff" element={<Game setsudokuResult={setsudokuResult} />} />
          <Route path="/result" element={<Result sudokuResult={sudokuResult} />} />
        </Routes>        
      </Router>
    </>
  );
}

export default App;
