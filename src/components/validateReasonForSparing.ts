const validateReasonForSparing: (reasonForSparing: string) => string[] = (
  reasonForSparing
) => {
  const errors = [];

  if (reasonForSparing.length < 17 || reasonForSparing.length > 153) {
    errors.push("Reason for sparing must be between 17 and 153 characters.");
  }

  return errors;
};

export default validateReasonForSparing;
