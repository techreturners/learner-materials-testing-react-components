import { useState } from "react";

const W12MInputSpeciesName = () => {
  const [speciesName, setSpeciesName] = useState("");

  const handleSpeciesNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSpeciesName(event.target.value);
  };

  return (
    <>
      <label htmlFor="speciesName">Species Name</label>
      <input
        id="speciesName"
        type="text"
        value={speciesName}
        onChange={handleSpeciesNameChange}
      />
    </>
  );
};

export default W12MInputSpeciesName;
