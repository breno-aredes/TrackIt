import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/img/trackit.png";

export default function Registration() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  function creatAccount(e) {
    e.preventDefault();
    const post =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    const data = { email, name, image, password };

    const promise = axios.post(post, data);
    promise.then((res) => {
      navigate("/");
    });
    promise.catch((err) => alert(err.response.data.message));
  }

  return (
    <BodyHome>
      <Img src={logo} alt="trackit" />
      <form onSubmit={creatAccount}>
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
        <label htmlFor="name">
          <input
            id="name"
            placeholder="nome"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          ></input>
        </label>
        <label htmlFor="image">
          <input
            id="image"
            placeholder="foto"
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          ></input>
        </label>
        <Button type="submit">Cadastrar</Button>
      </form>

      <StyledLink to="/">Já tem uma conta? Faça login!</StyledLink>
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
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    text-align: left;
    color: #666666;
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
