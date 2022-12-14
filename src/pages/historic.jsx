import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Historic() {
  return (
    <BodyHabits>
      <Header />
      <ContainerHabits>
        <h1>Histórico</h1>
      </ContainerHabits>
      <P>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
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
  margin-bottom: 28px;
  h1 {
    font-family: "Lexend Deca", sans-serif;
    color: #126ba5;
    font-family: Lexend Deca;
    font-size: 23px;
    font-weight: 400;
    line-height: 29px;
    margin-left: 17px;
  }
`;

const P = styled.div`
  width: 100%;
  font-family: "Lexend Deca", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  color: #666666;
  margin-left: 15px;
  p {
    width: 338px;
  }
`;
