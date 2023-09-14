import { useState } from "react";
import W12MinterfaceInputProps from "./W12MinterfaceInputProps";

const W12MInputNumberOfBeings: React.FC<W12MinterfaceInputProps> = ({
  state,
  setState,
}) => {
  const handleNumberOfBeingsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setState(event.target.value);
  };

  return (
    <>
      <label htmlFor="numberOfBeings">Number Of Beings</label>
      <input
        id="numberOfBeings"
        type="text"
        value={state}
        onChange={handleNumberOfBeingsChange}
      />
    </>
  );
};

export default W12MInputNumberOfBeings;
