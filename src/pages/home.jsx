import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/img/trackit.png";

export default function Home() {
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
        <Button>Entrar</Button>
      </form>

      <Link to="/">Não tem uma conta? Cadastre-se!</Link>
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
`;
