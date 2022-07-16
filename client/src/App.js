import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import ONama from "./pages/ONama";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

import './App.css'

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/o-nama" element={<ONama />} />
          <Route path="/en/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
