import { useState } from "react";
import W12MinterfaceInputProps from "./W12MinterfaceInputProps";
import ErrorMessage from "./ErrorMessage";

const W12MInputPlanetName: React.FC<W12MinterfaceInputProps> = (props) => {
  const [state, setState] = useState(props.state);

  const handlePlanetNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {

    const newValue = event.target.value;
    setState(newValue);
  };
  const errorMessage = props.validate(state);
  return (
    <>
      <label htmlFor="planetName">Planet Name</label>
      <input
        id="planetName"
        type="text"
        value={state}
        onChange={handlePlanetNameChange}
      />
      {errorMessage !== undefined && <ErrorMessage message={errorMessage} />}
    </>
  );
};

export default W12MInputPlanetName;
