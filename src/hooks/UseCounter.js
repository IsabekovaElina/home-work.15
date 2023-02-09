
import { useState } from "react";
export default function UseCounter(initialValue) {
  const [value, setValue] = useState(initialValue);
  const increment = () => {
    return setValue(value + 1);
  };
 
  const decrement = () => {
    setValue((initialValue) => {
      if (initialValue > 0) {   
        return setValue(value - 1)
      }
      return initialValue;
    });
  };
  const reset = () => {
    return setValue(initialValue);
  };

  return [value, increment, decrement, reset];
}
