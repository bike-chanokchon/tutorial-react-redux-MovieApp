import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
