import styled from "styled-components";
import UseCounter from "../../hooks/UseCounter";

const CounterForm = () => {
  const [counter, increment, decrement, reset,count] = UseCounter(2, 4);


  return (
    <>
      <Header>My Counter</Header>
      <Head>{counter}</Head>
      <div>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement} disabled={!count}>Decrement</Button>
        <Button onClick={reset}>Reset</Button>
      </div>
    </>
  );
};

export default CounterForm;


const Header=styled.div`
display:grid;
justify-content:center;
padding:30px;
  font-size:50px;
  font-family:cursive;
  /* margin-left:610px; */
`

const Head=styled.div`
display:grid;
justify-content:center;
  font-size:50px;
`
const Button = styled.div`
  /* text-align:center; */
  margin-left: 680px;
  color: #701e70;
  font-size: 20px;
  font-family: serif;
  border-radius: 20px;
  border-color: red;
  background-color: #b49c14;
  width: 120px;
  height: 30px;
 
  display: flex;
  align-content: flex-end;
  justify-content: space-evenly;
  align-items: flex-start;
`;
