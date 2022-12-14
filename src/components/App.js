import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../assets/style/GlobalStyle";
import Home from "../pages/home";
import Registration from "../pages/registration";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
