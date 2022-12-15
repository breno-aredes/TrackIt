import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Habits() {
  const [creatList, setCreatList] = useState(false);
  const ArrWeekday = ["D", "S", "T", "Q", "Q", "S", "S"];
  const [weekDay, setWeekDay] = useState([]);

  // useEffect(() => {
  //   const URL =
  //     "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
  //   const token =
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzIzMywiaWF0IjoxNjcxMDc3NjMwfQ.-SAWbfaVd4QalodbVRJm9erlOQFIw-Mopgq1C2S9WZ4";

  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };

  //   const promise = axios.get(URL);

  //   promise.then((res) => console.log(res));
  //   promise.catch((err) => console.log(err.response.data));
  // }, []);

  return (
    <BodyHabits>
      <Header />
      <ContainerHabits>
        <h1>Meus hábitos</h1>
        <button onClick={() => setCreatList(true)}>+</button>
      </ContainerHabits>
      {creatList && (
        <ContainerCreat>
          <input placeholder="nome do hábito"></input>
          <ContainerWeekDay>
            {ArrWeekday.map((w, i) => (
              <ContainerButtonWeekDay
                key={i}
                active={weekDay.includes(i)}
                onClick={() => setWeekDay([...weekDay, i])}
              >
                {w}
              </ContainerButtonWeekDay>
            ))}
          </ContainerWeekDay>
          <ContainerEnd>
            <p onClick={() => setCreatList(false)}>Cancelar</p>
            <ButtonSave onClick={() => alert("oi")}>Salvar</ButtonSave>
          </ContainerEnd>
        </ContainerCreat>
      )}
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
  padding-top: 28px;
  margin-bottom: 20px;
  h1 {
    font-family: "Lexend Deca", sans-serif;
    color: #126ba5;
    font-family: Lexend Deca;
    font-size: 23px;
    font-weight: 400;
    line-height: 29px;
    margin-left: 18px;
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
    margin-right: 18px;
    cursor: pointer;
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
  justify-content: left;
  margin-left: 18px;
  p {
    width: 338px;
  }
`;

const ContainerCreat = styled.div`
  width: 340px;
  height: 180px;
  background-color: #ffffff;
  margin-bottom: 29px;
  margin-left: 17px;
  border-radius: 5px;
  input {
    height: 45px;
    width: 303px;
    margin-top: 18px;
    border: 1px solid #d4d4d4;
    padding-left: 11px;
    box-sizing: border-box;
    border-radius: 5px;
    font-family: "Lexend Deca", sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    text-align: left;
    margin-left: 19px;
    color: #666666;
  }
  input::placeholder {
    color: #e5e5e5;
  }
`;

const ContainerWeekDay = styled.div`
  display: flex;
  margin-left: 19px;
  margin-top: 8px;
`;

const ContainerButtonWeekDay = styled.button`
  background-color: ${(props) => (props.active ? "#CFCFCF" : "#ffffff")};
  border: 1px solid #d4d4d4;
  color: ${(props) => (props.active ? "#ffffff" : "#d4d4d4")};
  width: 30px;
  height: 30px;
  border-radius: 5px;
  margin-right: 4px;
  margin-bottom: 29px;
`;

const ContainerEnd = styled.div`
  display: flex;
  justify-content: right;
  p {
    font-family: "Lexend Deca", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    margin-top: 7px;
    cursor: pointer;
    color: #52b6ff;
  }
`;

const ButtonSave = styled.button`
  background-color: #52b6ff;
  height: 35px;
  width: 84px;
  border-radius: 5px;
  margin-right: 16px;
  margin-left: 23px;
  font-family: "Lexend Deca", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  border: none;
  color: #ffffff;
  cursor: pointer;
`;
