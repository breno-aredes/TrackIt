import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Habits() {
  return (
    <BodyHabits>
      <Header />
      <ContainerHabits>
        <h1>Meus hábitos</h1>
        <button>+</button>
      </ContainerHabits>
      <P>
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
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
  justify-content: space-between;
  margin: 18px 28px 18px;
  padding-top: 28px;
  h1 {
    font-family: "Lexend Deca", sans-serif;
    color: #126ba5;
    font-family: Lexend Deca;
    font-size: 23px;
    font-weight: 400;
    line-height: 29px;
  }
  button {
    border: none;
    height: 35px;
    width: 40px;
    border-radius: 5px;
    background-color: #52b6ff;
    font-family: "Lexend Deca", sans-serif;
    font-size: 27px;
    font-weight: 400;
    line-height: 34px;
    color: #ffffff;
  }
`;

const P = styled.div`
  width: 100%;
  font-family: "Lexend Deca", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  color: #666666;
  display: flex;
  justify-content: center;
  p {
    width: 338px;
  }
`;
