
import  {useState} from "react"

const UseInput = (initialValue, type) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
    setError("");
  };

  const validate = () => {
    switch (type) {
      case "text":
        if (!value) {
          setError("Text is required");
        }
        break;
      case "email":
        if (!value) {
          setError("Email is required");
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          setError("Invalid email address");
        }
        break;
      case "password":
        if (!value) {
          setError("Password is required");
        }
        break;
      case "date":
        if (!value) {
          setError("Date is required");
        }
        break;
      default:
        break;
    }
  };

  return { value, onChange, error, validate };
};

export default UseInput;