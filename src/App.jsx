import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrontPage from "./FrontPage";
import Skills from "./Skills";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/Skill" element={<Skills />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
