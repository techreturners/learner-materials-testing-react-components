import { useState } from "react";
import W12MinterfaceInputProps from "./W12MinterfaceInputProps";
import ErrorMessage from "./ErrorMessage";

const W12MInputNumberOfBeings: React.FC<W12MinterfaceInputProps> = (props) => {
  const [state, setState] = useState(props.state);

  const handleNumberOfBeingsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = event.target.value;
    setState(newValue);
  };
  const errorMessage = props.validate(state);
  return (
    <>
      <label htmlFor="numberOfBeings">Number Of Beings</label>
      <input
        id="numberOfBeings"
        type="text"
        value={state}
        onChange={handleNumberOfBeingsChange}
      />
      {errorMessage !== undefined && <ErrorMessage message={errorMessage} />}
    </>
  );
};

export default W12MInputNumberOfBeings;
