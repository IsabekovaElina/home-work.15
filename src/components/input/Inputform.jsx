import React from "react";

import styled from "styled-components";
import UseInput from "../../hooks/UseInput";

const Inputform = () => {
  const text = UseInput("", "text");
  const email = UseInput("", "email");
  const password = UseInput("", "password");
  const date = UseInput("", "date");

  console.log(email.error);

  const submitForm = (event) => {
    event.preventDefault();
  };
  const onValide = {
    text: text.validate,
    email: email.validate,
    password: password.validate,
    date: date.validate,
  };

  return (
    <>
      <Div>Input Form</Div>
      <FormWrapper onSubmit={submitForm}>
        <label htmlFor="email">Email</label>
        <container>
          <input
            size="small"
            type="email"
            id="email"
            value={email.value}
            onChange={email.onChange}
            onBlur={onValide.email}
          />
          <button variant="outlined" onClick={onValide.email}>
            submit
          </button>
          {email.error && <Error>{email.error}</Error>}
        </container>

        {/* <input label="text" placeholder="text" {...text} type="text" /> */}

        <container>
          <label htmlFor="password">Password</label>
          <input
            size="small"
            type="password"
            id="password"
            value={password.value}
            onChange={password.onChange}
            onBlur={onValide.password}
          />
          <button
            variant="outlined"
            color="success"
            onClick={onValide.password}
          >
            submit
          </button>
          {email.error && <Error>{password.error}</Error>}
        </container>

        <container>
          <label htmlFor="date">Date</label>
          <input
            size="small"
            type="date"
            id="date"
            value={date.value}
            onChange={date.onChange}
            onBlur={onValide.date}
          />
          <button variant="outlined" onClick={onValide.date}>
            submit
          </button>
          {email.error && <Error>{date.error}</Error>}
        </container>
        {/* <button
          //  onClick={onValide.password}
          type="submit"
          variant="outlined"
          onClick={onValide.email.password}
          color="success"
        >
          Submit
        </button> */}

        {text.error}
        {email.error}
        {password.error}
        {date.error}
      </FormWrapper>
    </>
  );
};

export default Inputform;

const Div = styled.div`
  justify-content: center;
  color: purple;
  display: grid;
  padding: 30px;
  font-size: 40px;
  font-family: "Fira sans";
`;
const FormWrapper = styled.form`
  display:grid;
  justify-content: center;
  gap: 20px;
  padding-bottom: 50px;
`;
const Error = styled.div`
  color:red;
`


// import useInput from "../hooks/useInput";
// import React from "react";
// import styled from "styled-components";
// import { Button, TextField } from "@mui/material";

// const Inputform = () => {
//   const email = useInput("", "email");
//   const password = useInput("", "password");
//   const date = useInput("", "date");
//   console.log(email);
//   const onValide = {
//     email: email.validate,
//     password: password.validate,
//     date: date.validate,
//   };
//   return (
//     <Container>
//       <InputContainer>
//         <label htmlFor="email">Email</label>
//         <TextField
//           size="small"
//           type="email"
//           id="email"
//           value={email.value}
//           onChange={email.onChange}
//           onBlur={onValide.email}
//         />
//         <Button variant="outlined" onClick={onValide.email}>
//           submit
//         </Button>
//         {email.error && <Error>{email.error}</Error>}
//       </InputContainer>
//       <InputContainer>
//         <label htmlFor="password">Password</label>
//         <TextField
//           size="small"
//           type="password"
//           id="password"
//           value={password.value}
//           onChange={password.onChange}
//           onBlur={onValide.password}
//         />
//         <button variant="outlined" color="success" onClick={onValide.password}>
//           submit
//         </button>
//         {email.error && <Error>{password.error}</Error>}
//       </InputContainer>
//       <InputContainer>
//         <label htmlFor="date">Date</label>
//         <TextField
//           size="small"
//           type="date"
//           id="date"
//           value={date.value}
//           onChange={date.onChange}
//           onBlur={onValide.date}
//         />
//         <button variant="outlined" onClick={onValide.date}>
//           submit
//         </button>
//         {email.error && <Error>{date.error}</Error>}
//       </InputContainer>
//     </Container>
//   );
// };

// export default Inputform;
// const Container = styled.div`
//   display: grid;
//   gap: 15px;
//   text-align: center;
// `;

// const InputContainer = styled.div`
//   display: grid;
//   grid-template-columns: 100px 450px 100px 450px;
//   justify-content: center;
//   gap: 20px;
// `;

// const Error = styled.span`
//   color: red;
// `;