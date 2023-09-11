import { useState } from "react";

const W12MInputNumberOfBeings = () => {
  const [numberOfBeings, setNumberOfBeings] = useState("");

  const handleNumberOfBeingsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNumberOfBeings(event.target.value);
  };

  return (
    <>
      <label htmlFor="numberOfBeings">Number Of Beings</label>
      <input
        id="numberOfBeings"
        type="text"
        value={numberOfBeings}
        onChange={handleNumberOfBeingsChange}
      />
    </>
  );
};

export default W12MInputNumberOfBeings;
