import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactMe from "./pages/ContactMe";
import "/src/App.css";

function App() {
  return (
    <BrowserRouter>
      {/* Top Navigation */}
      <div className="nav-container" style={{ display: "flex", justifyContent: "flex-end", padding: "15px" }}>
        <Link to="/" style={{textDecoration: "none", fontWeight: "bold" }}>
          Home
        </Link>
        <Link to="/about" style={{marginLeft: "20px", textDecoration: "none", fontWeight: "bold" }}>
          About
        </Link>
        <Link to="/ContactMe" style={{marginLeft: "20px", textDecoration: "none", fontWeight: "bold" }}>
          ContactMe
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ContactMe" element={<ContactMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
