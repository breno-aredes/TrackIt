import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import { AuthContext } from "../Context/auth";

export default function Habits() {
  const [creatList, setCreatList] = useState(false);
  const ArrWeekday = ["D", "S", "T", "Q", "Q", "S", "S"];
  const [days, setWeekDay] = useState([]);
  const [name, setName] = useState("");
  const [answerList, setAnswerList] = useState([]);
  const [run, setRun] = useState(0);

  const { token } = useContext(AuthContext);

  useEffect(() => {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const promise = axios.get(URL, config);

    promise.then((res) => {
      setAnswerList(res.data);
    });
    promise.catch((err) => console.log(err.response.data));
  }, [run]);

  function cancelList() {
    setCreatList(false);
    setRun(run + 1);
  }

  function submitList() {
    const data = { name, days };

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      data,
      config
    );
    promise.then(cancelList(), setName(""));
    promise.catch((err) => console.log(err.response.data));
  }

  function deleteHabit(id) {
    if (!window.confirm("Você tem certeza que deseja deletar este hábito?")) {
      return;
    }
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.delete(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
      config
    );
    promise.then(() => cancelList());
    promise.catch((err) => console.log(err.response.data));
  }

  function clickedDay(i) {
    const isSelected = days.includes(i);

    if (isSelected) {
      const newDays = days.filter((day) => day !== i);
      setWeekDay(newDays);
      return;
    }

    setWeekDay([...days, i]);
  }

  return (
    <BodyHabits>
      <Header />
      <ContainerHabits>
        <h1>Meus hábitos</h1>
        <button data-test="habit-create-btn" onClick={() => setCreatList(true)}>
          +
        </button>
      </ContainerHabits>

      {creatList && (
        <ContainerList data-test="habit-create-container">
          <div>
            <label htmlFor="habitsName">
              <input
                data-test="habit-name-input"
                id="habitsName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="nome do hábito"
                required
              ></input>
            </label>
            <ContainerWeekDay>
              {ArrWeekday.map((w, i) => (
                <ContainerButtonWeekDay
                  data-test="habit-day"
                  key={i}
                  active={days.includes(i)}
                  onClick={() => clickedDay(i)}
                >
                  {w}
                </ContainerButtonWeekDay>
              ))}
            </ContainerWeekDay>
            <ContainerEnd>
              <p
                data-test="habit-create-cancel-btn"
                onClick={() => cancelList()}
              >
                Cancelar
              </p>
              <ButtonSave
                data-test="habit-create-save-btn"
                onClick={() => submitList()}
              >
                Salvar
              </ButtonSave>
            </ContainerEnd>
          </div>
        </ContainerList>
      )}

      {answerList.map((A) => (
        <ContainerList data-test="habit-container" key={A.id}>
          <div>
            <p data-test="habit-name">{A.name}</p>
            <ContainerWeekDay>
              {ArrWeekday.map((w, i) => (
                <ContainerButtonWeekDay
                  data-test="habit-day"
                  key={i}
                  active={A.days.includes(i)}
                >
                  {w}
                </ContainerButtonWeekDay>
              ))}
            </ContainerWeekDay>
          </div>

          <ion-icon
            data-test="habit-delete-btn"
            name="trash-outline"
            onClick={() => deleteHabit(A.id)}
          ></ion-icon>
        </ContainerList>
      ))}

      <P>
        {!answerList && (
          <p>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </p>
        )}
      </P>
      <Footer />
    </BodyHabits>
  );
}

const BodyHabits = styled.div`
  background-color: #e5e5e5;
  position: relative;
  margin-top: 70px;
  padding-bottom: 100px;
`;

const ContainerHabits = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 28px;
  margin-bottom: 20px;
  h1 {
    font-family: "Lexend Deca", sans-serif;
    color: #126ba5;
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

const ContainerList = styled.div`
  background-color: #ffffff;
  margin-bottom: 29px;
  margin-left: 17px;
  border-radius: 5px;
  margin-right: 17px;
  display: flex;
  justify-content: space-between;
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
  p {
    font-family: "Lexend Deca", sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    text-align: left;
    color: #666666;
    padding: 13px 0px 0px 19px;
  }
  ion-icon {
    font-size: 15px;
    margin: 11px 11px;
    color: #666666;
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
  margin-bottom: 15px;
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
    margin-top: 5px;
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
  margin-bottom: 15px;
  font-family: "Lexend Deca", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  border: none;
  color: #ffffff;
  margin-top: 10px;
  cursor: pointer;
`;
