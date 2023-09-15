import W12MinterfaceInputProps from "./W12MinterfaceInputProps";
import ErrorMessage from "./ErrorMessage";
import { useState } from "react";

const W12MInputSpeciesName: React.FC<W12MinterfaceInputProps> = (props) => {
  const [state, setState] = useState(props.state);

  const handleSpeciesNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = event.target.value;
    setState(newValue);
  };

  const errorMessage = props.validate(state);

  return (
    <>
      <label htmlFor="speciesName">Species Name</label>
      <input
        id="speciesName"
        type="text"
        value={state}
        onChange={handleSpeciesNameChange}
      />
      {errorMessage !== undefined && <ErrorMessage message={errorMessage} />}
    </>
  );
};

export default W12MInputSpeciesName;
