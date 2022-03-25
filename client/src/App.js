import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreateCity from "./pages/CreateCity";
import DeleteAllCities from "./pages/DeleteAllCities";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Home Page</Link>
        <Link to="/createcity"> Create New City</Link>
        <Link to="/deleteallcities"> Delete All Cities</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createcity" element={<CreateCity />} />
          <Route path="/deleteallcities" element={<DeleteAllCities />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
