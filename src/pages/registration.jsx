import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/img/trackit.png";

export default function Registration() {
  return (
    <BodyHome>
      <Img src={logo} alt="trackit" />
      <form>
        <label htmlFor="email">
          <input id="email" placeholder="e-mail" type="email" required></input>
        </label>
        <label htmlFor="password">
          <input
            id="password"
            placeholder="senha"
            type="password"
            required
          ></input>
        </label>
        <label htmlFor="name">
          <input id="name" placeholder="nome" type="text" required></input>
        </label>
        <label htmlFor="url">
          <input id="url" placeholder="foto" type="url" required></input>
        </label>
        <Button>Cadastrar</Button>
      </form>

      <Link to="/">Já tem uma conta? Faça login!</Link>
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
