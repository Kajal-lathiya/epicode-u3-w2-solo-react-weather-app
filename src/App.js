import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarScreen from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<NavbarScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
