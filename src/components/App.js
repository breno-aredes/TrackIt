import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../assets/style/GlobalStyle";
import Today from "../pages/today";
import Habits from "../pages/habits";
import Historic from "../pages/historic";
import Home from "../pages/home";
import Registration from "../pages/registration";
import React, { useState } from "react";
import AuthProvider from "../Context/auth";

function App() {
  const [imageUser, setImageUser] = useState("");
  const [tokenUser, setTokerUser] = useState("");

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Home setTokerUser={setTokerUser} setImageUser={setImageUser} />
            }
          />
          <Route path="/cadastro" element={<Registration />} />
          <Route
            path="/habitos"
            element={<Habits tokenUser={tokenUser} imageUser={imageUser} />}
          />
          <Route path="/historico" element={<Historic />}></Route>
          <Route path="/hoje" element={<Today />}></Route>
        </Routes>
      </AuthProvider>

      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
