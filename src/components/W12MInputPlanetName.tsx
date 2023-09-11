import { useState } from "react";

const W12MInputPlanetName = () => {
  const [planetName, setPlanetName] = useState("");

  const handlePlanetNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPlanetName(event.target.value);
  };

  return (
    <>
      <label htmlFor="planetName">Planet Name</label>
      <input
        id="planetName"
        type="text"
        value={planetName}
        onChange={handlePlanetNameChange}
      />
    </>
  );
};

export default W12MInputPlanetName;
