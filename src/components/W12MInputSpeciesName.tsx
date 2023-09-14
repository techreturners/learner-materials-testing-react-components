import { useState } from "react";

import W12MinterfaceInputProps from "./W12MinterfaceInputProps";

const W12MInputSpeciesName: React.FC<W12MinterfaceInputProps> = ({
  state,
  setState,
}) => {
  const handleSpeciesNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setState(event.target.value);
  };

  return (
    <>
      <label htmlFor="speciesName">Species Name</label>
      <input
        id="speciesName"
        type="text"
        value={state}
        onChange={handleSpeciesNameChange}
      />
    </>
  );
};

export default W12MInputSpeciesName;
