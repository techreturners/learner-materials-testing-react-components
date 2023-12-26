const LENGTH_ERROR =
  "Reason for sparing: Must be between 17 and 153 characters";

const validateSparingReason: (sparingReason: string) => string[] = (
  sparingReason
) => {
  const errorMessages = Array<string>();
  if (sparingReason.length < 17 || sparingReason.length > 153)
    errorMessages.push(LENGTH_ERROR);
  return errorMessages;
};

export default validateSparingReason;
