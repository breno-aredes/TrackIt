import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../assets/style/GlobalStyle";
import Home from "../pages/home";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
