import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration > 0 ? true : false;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevValue) => {
      return {
        ...prevValue,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <div>
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange}></UserInput>
      {inputIsValid && <Results userInput={userInput} />}
      {!inputIsValid && <p className="center">Please enter duration greater than 0</p>}
    </div>
  );
}

export default App;
