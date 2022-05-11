import { BrowserRouter as Router, Routes, 
  Route} from "react-router-dom";
import { Game } from "./components/Game/Game";
import { Home } from "./components/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:grid/:diff" element={<Game />} />
        </Routes>        
      </Router>
    </>
  );
}

export default App;
