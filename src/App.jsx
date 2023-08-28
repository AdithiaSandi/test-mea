import "./App.css";
import Learning from "./pages/Learning";
import MyCourse from "./pages/MyCourse";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<MyCourse />} />
        <Route path="/learning" element={<Learning />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
