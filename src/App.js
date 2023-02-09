import React from "react";
import "./App.css";
import CounterForm from "./components/counter/CounterForm";
import Inputform from "./components/input/Inputform";
import TaimerForm from "./components/taimer/TaimerForm";
// import useCounter from "./components/counter/useCounter"
function App() {
  return (
    <div>
      <CounterForm />
      {/* <UseCounter/> */}
      {/* <useInput/> */}
      <Inputform/>
      <TaimerForm/>
    </div>
  );
}

export default App;
