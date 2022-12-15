import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../assets/style/GlobalStyle";
import Today from "../pages/today";
import Habits from "../pages/habits";
import Historic from "../pages/historic";
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
        <Route path="/historico" element={<Historic />}></Route>
        <Route path="/hoje" element={<Today />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
