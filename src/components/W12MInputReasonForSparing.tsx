import { useState } from "react";

const W12MInputReasonForSparing = () => {
  const [reasonForSparing, setReasonForSparing] = useState("");

  const handleReasonForSparingChange = (
    event: React.ChangeEvent<HTMLTextAreaElement> //
  ) => {
    setReasonForSparing(event.target.value);
  };

  return (
    <>
      <label htmlFor="reasonForSparing">Reason For Sparing</label>
      <textarea
        id="reasonForSparing"
        value={reasonForSparing}
        onChange={handleReasonForSparingChange}
      />
    </>
  );
};

export default W12MInputReasonForSparing;
