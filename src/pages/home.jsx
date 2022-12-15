import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/img/trackit.png";

export default function Home() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();
    const post = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`;
    const data = { email, password };

    const promise = axios.post(post, data);
    promise.then((res) => {
      navigate("/habitos");
      console.log(res);
    });

    promise.catch((err) => console.log(err.response.data.message));
  }

  return (
    <BodyHome>
      <Img src={logo} alt="trackit" />
      <form onSubmit={login}>
        <label htmlFor="email">
          <input
            id="email"
            placeholder="e-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
        </label>
        <label htmlFor="password">
          <input
            id="password"
            placeholder="senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
        </label>
        <Button type="submit">Entrar</Button>
      </form>

      <StyledLink to="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink>
    </BodyHome>
  );
}

const BodyHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 32px;
    margin-bottom: 25px;
  }

  input {
    height: 45px;
    width: 303px;
    margin-top: 6px;
    border: 1px solid #d4d4d4;
    padding-left: 11px;
    box-sizing: border-box;
    border-radius: 5px;
    font-family: "Lexend Deca", sans-serif;
    font-size: 21px;
    font-weight: 400;
    line-height: 26px;
  }
  input::placeholder {
    color: #e5e5e5;
  }
`;

const Img = styled.img`
  width: 180px;
  height: 180px;
  margin-top: 68px;
`;

const Button = styled.button`
  background-color: #52b6ff;
  border: none;
  margin-top: 6px;
  height: 45px;
  width: 303px;
  border-radius: 5px;
  color: #ffffff;
  font-family: "Lexend Deca", sans-serif;
  font-size: 21px;
  font-weight: 400;
  line-height: 26px;
`;

const StyledLink = styled(Link)`
  color: #52b6ff;
`;
