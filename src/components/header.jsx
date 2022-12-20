import { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../Context/auth";

export default function Header() {
  const { image } = useContext(AuthContext);

  return (
    <BodyHeader data-test="header">
      <h1>TrackIt</h1>
      <img src={image} alt="foto de perfil" />
    </BodyHeader>
  );
}

const BodyHeader = styled.header`
  width: 100%;
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
  position: fixed;
  top: 0;
  right: 0;
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
