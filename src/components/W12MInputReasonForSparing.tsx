import { useState } from "react";
import W12MinterfaceInputProps from "./W12MinterfaceInputProps";

const W12MInputReasonForSparing: React.FC<W12MinterfaceInputProps> = ({
  state,
  setState,
}) => {
  const handleReasonForSparingChange = (
    event: React.ChangeEvent<HTMLTextAreaElement> //
  ) => {
    setState(event.target.value);
  };

  return (
    <>
      <label htmlFor="reasonForSparing">Reason For Sparing</label>
      <textarea
        id="reasonForSparing"
        value={state}
        onChange={handleReasonForSparingChange}
      />
    </>
  );
};

export default W12MInputReasonForSparing;
