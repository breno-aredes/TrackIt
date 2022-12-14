import styled from "styled-components";

export default function Header() {
  return (
    <BodyHeader>
      <h1>TrackIt</h1>
      <img
        src="https://static.vecteezy.com/ti/vetor-gratis/p3/70328-bob-esponja-cartoon-gratis-vetor.jpg"
        alt="foto de perfil"
      />
    </BodyHeader>
  );
}

const BodyHeader = styled.header`
  height: 70px;
  background-color: #126ba5;
  font-family: "Playball", cursive;
  font-size: 39px;
  font-weight: 400;
  line-height: 49px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    margin-left: 18px;
    color: #ffffff;
  }
  img {
    width: 51px;
    height: 51px;
    border-radius: 25px;
    margin-right: 10px;
  }
`;
