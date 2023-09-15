import { useState } from "react";
import W12MinterfaceInputProps from "./W12MinterfaceInputProps";
import ErrorMessage from "./ErrorMessage";
const W12MInputReasonForSparing: React.FC<W12MinterfaceInputProps> = (
  props
) => {
  const [state, setState] = useState(props.state);
  const handleReasonForSparingChange = (
    event: React.ChangeEvent<HTMLTextAreaElement> //
  ) => {
    const newValue = event.target.value;
    setState(newValue);
  };
  const errorMessage = props.validate(state);
  return (
    <>
      <label htmlFor="reasonForSparing">Reason For Sparing</label>
      <textarea
        id="reasonForSparing"
        value={state}
        onChange={handleReasonForSparingChange}
      />
      {errorMessage !== undefined && <ErrorMessage message={errorMessage} />}
    </>
  );
};

export default W12MInputReasonForSparing;
