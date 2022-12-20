import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import { AuthContext } from "../Context/auth";
import dayjs from "dayjs";

export default function Today() {
  const { token } = useContext(AuthContext);
  const [answerList, setAnswerList] = useState([]);
  const [run, setRun] = useState(0);

  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sabado",
  ];

  useEffect(() => {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const promise = axios.get(URL, config);

    promise.then((res) => {
      setAnswerList(res.data);
      console.log(res.data);
    });
    promise.catch((err) => console.log(err.response.data));
  }, [run]);

  function confirm(id) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.post(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
      {},
      config
    );
    promise.then(setRun(run + 1));
    promise.catch((err) => console.log(err.response.data));
  }

  function disconfirm(id) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.post(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
      {},
      config
    );
    promise.then(setRun(run - 1));
    promise.catch((err) => console.log(err.response.data));
  }

  return (
    <BodyHabits>
      <Header />
      <ContainerSubtitles>
        <h1 data-test="today">
          {weekDays[dayjs().day()]}, {dayjs().date()}/{dayjs().month() + 1}
        </h1>
      </ContainerSubtitles>
      <P>
        <p data-test="today-counter">Nenhum hábito concluído ainda</p>
      </P>

      {answerList.map((A) => (
        <ContainerHabits
          data-test="today-habit-container"
          key={A.id}
          active={A.done}
        >
          <div>
            <h1 data-test="today-habit-name">{A.name}</h1>
            <p data-test="today-habit-sequence">
              Sequência atual: <span>{A.currentSequence}</span>
            </p>
            <p>
              Seu recorde:{" "}
              <SpanTwo
                data-test="today-habit-record"
                currentSequence={A.currentSequence}
                highestSequence={A.highestSequence}
                done={A.done}
              >
                {A.highestSequence}
              </SpanTwo>
            </p>
          </div>

          <ion-icon
            data-test="today-habit-check-btn"
            onClick={
              A.done === true ? () => disconfirm(A.id) : () => confirm(A.id)
            }
            name="checkbox"
          ></ion-icon>
        </ContainerHabits>
      ))}

      <Footer />
    </BodyHabits>
  );
}

const BodyHabits = styled.div`
  background-color: #e5e5e5;
  position: relative;
  height: 100vh;
  margin-top: 70px;
  width: 100%;
`;

const ContainerSubtitles = styled.div`
  display: flex;
  justify-content: left;
  padding-top: 28px;
  h1 {
    font-family: "Lexend Deca", sans-serif;
    color: #126ba5;
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
  margin-bottom: 28px;
  p {
    width: 338px;
  }
`;

const ContainerHabits = styled.div`
  background-color: #ffffff;
  margin-bottom: 10px;
  margin-left: 17px;
  border-radius: 5px;
  margin-right: 17px;
  padding-bottom: 17px;
  display: flex;
  justify-content: space-between;
  h1 {
    font-family: "Lexend Deca", sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    text-align: left;
    color: #666666;
    padding: 13px 0px 7px 19px;
  }
  p {
    font-family: "Lexend Deca", sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    text-align: left;
    color: #666666;
    padding: 0px 0px 0px 19px;
  }
  ion-icon {
    font-size: 69px;
    margin-top: 13px;
    margin-right: 12px;
    color: ${(props) => (props.active ? "#8FC549" : "#ebebeb")};
  }
  span {
    color: ${(props) => props.active && "#8FC549"};
  }
`;

const SpanTwo = styled.strong`
  color: ${(props) =>
    props.done
      ? props.currentSequence >= props.highestSequence
        ? "#8FC549"
        : "#666666"
      : "#666666"};
`;
