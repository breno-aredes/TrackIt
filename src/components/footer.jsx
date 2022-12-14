import styled from "styled-components";

export default function Footer() {
  return (
    <BodyFooter>
      <h1>Hábitos</h1>
      <div>Hoje</div>
      <h1>Histórico</h1>
    </BodyFooter>
  );
}

const BodyFooter = styled.div`
  position: fixed;
  bottom: 0;
  height: 70px;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Lexend Deca", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  color: #52b6ff;
  padding-left: 36px;
  padding-right: 36px;
  box-sizing: border-box;

  div {
    width: 91px;
    height: 91px;
    border-radius: 45px;
    background-color: #52b6ff;
    position: relative;
    margin-bottom: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
  }
`;
