import { useState } from "react";

const W12MButtonSubmit: React.FC = () => {
  const handleSubmit = () => {
    alert(`Form data submitted:`);
  };

  return (
    <>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
};

export default W12MButtonSubmit;
