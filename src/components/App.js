import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../assets/style/GlobalStyle";
import Habits from "../pages/habits";
import Home from "../pages/home";
import Registration from "../pages/registration";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Registration />} />
        <Route path="/habitos" element={<Habits />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
