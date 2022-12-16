import { useContext } from "react";
import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import { AuthContext } from "../Context/auth";

export default function Today() {
  const { token } = useContext(AuthContext);

  return (
    <BodyHabits>
      <Header />
      <ContainerHabits>
        <h1>Segunda, 17/05</h1>
      </ContainerHabits>
      <P>
        <p>Nenhum hábito concluído ainda</p>
      </P>
      <Footer />
    </BodyHabits>
  );
}

const BodyHabits = styled.div`
  background-color: #e5e5e5;
  position: relative;
  height: 100vh;
  margin-top: 70px;
`;

const ContainerHabits = styled.div`
  display: flex;
  justify-content: left;
  padding-top: 28px;
  h1 {
    font-family: "Lexend Deca", sans-serif;
    color: #126ba5;
    font-family: Lexend Deca;
    font-size: 23px;
    font-weight: 400;
    line-height: 29px;
    margin-left: 18px;
  }
`;

const P = styled.div`
  width: 100%;
  font-family: "Lexend Deca", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  color: #666666;
  margin-left: 18px;
  p {
    width: 338px;
  }
`;
