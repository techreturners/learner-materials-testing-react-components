const CHARACTER_ERROR = "Number of beings: Numbers ONLY please";
const MIN_ERROR =
  "Number of beings: Must be at least 1,000,000,000 (no commas!).";

const validateNumberOfBeings: (numberOfBeings: string) => string[] = (
  numberOfBeings
) => {
  const errorMessages = Array<string>();
  let num = 0;

  if (numberOfBeings.match("[^0-9]")) errorMessages.push(CHARACTER_ERROR);
  else num = Number(numberOfBeings);

  if (num < 1000000000 && !errorMessages.includes(CHARACTER_ERROR))
    errorMessages.push(MIN_ERROR);

  return errorMessages;
};

export default validateNumberOfBeings;
