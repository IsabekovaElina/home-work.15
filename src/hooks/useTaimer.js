import { useState, useEffect } from "react";

const useTimer = (duration = 2 * 60) => {
  const [timer, setTimer] = useState(duration);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isCounting && timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isCounting, timer]);

  const handleStart = () => {
    setIsCounting(true);
  };

  const handleStop = () => {
    setIsCounting(false);
  };

  const handleReset = () => {
    setTimer(duration);
    setIsCounting(false);
  };

  return { timer, isCounting, handleStart, handleStop, handleReset };
};

export default useTimer;
