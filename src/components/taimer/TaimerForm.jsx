import React from "react";
import useTimer from "../../hooks/useTaimer";
import { getPadTime } from "../../hooks/TaimerWi";
import styled from "styled-components";
const TaimerForm = () => {
  const { timer, handleStart, handleStop, handleReset } = useTimer();

  const minutes = getPadTime(Math.floor(timer / 60));
  const seconds = getPadTime(timer % 60);

  return (
    <>
      <Div>Taimer with Hook</Div>
      <Main>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </Main>
      <Container>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </Container>
    </>
  );
};

export default TaimerForm;

const Div = styled.div`
  display: grid;
  justify-content: center;
  padding: 30px;
  font-size: 50px;
  font-family: cursive;
  color: #31117b;
`;

const Main = styled.main`
  font-family: "Oxygen";
  font-size: 40px;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  gap: 10px;
  display: flex;
  justify-content: center;
  padding: 30px;
`;
