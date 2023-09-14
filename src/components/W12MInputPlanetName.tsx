import { useState } from "react";
import W12MinterfaceInputProps from "./W12MinterfaceInputProps";

const W12MInputPlanetName: React.FC<W12MinterfaceInputProps> = ({
  state,
  setState,
}) => {
  const handlePlanetNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setState(event.target.value);
  };

  return (
    <>
      <label htmlFor="planetName">Planet Name</label>
      <input
        id="planetName"
        type="text"
        value={state}
        onChange={handlePlanetNameChange}
      />
    </>
  );
};

export default W12MInputPlanetName;
